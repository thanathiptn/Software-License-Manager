const Assignment = require('../models/Assignment');
const Licence = require('../models/Licence');
const User = require('../models/User');
const { writeAuditLog } = require('../utils/auditLogger');

const assignLicence = async (req, res) => {
    const { licenceId, userId } = req.body;
    try {
        const licence = await Licence.findById(licenceId);
        if (!licence) return res.status(404).json({ message: 'Licence not found' });

        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        const assignedCount = await Assignment.countDocuments({ licence: licenceId, active: true });
        if (assignedCount >= licence.purchasedQuantity) {
            return res.status(400).json({
                message: 'No licences available',
                available: 0,
                purchased: licence.purchasedQuantity,
            });
        }

        const existing = await Assignment.findOne({ licence: licenceId, user: userId, active: true });
        if (existing) return res.status(400).json({ message: 'This user already has this licence' });

        const assignment = await Assignment.create({ licence: licenceId, user: userId });
        await writeAuditLog(req.user, 'assigned', licence.product, `to ${user.name}`);

        res.status(201).json({
            assignment,
            available: licence.purchasedQuantity - assignedCount - 1,
            purchased: licence.purchasedQuantity,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { assignLicence };
