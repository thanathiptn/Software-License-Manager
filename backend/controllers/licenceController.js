const Licence = require('../models/Licence');
const Assignment = require('../models/Assignment');
const { writeAuditLog } = require('../utils/auditLogger');

const getLicences = async (req, res) => {
    try {
        const licences = await Licence.find().sort({ product: 1 });
        const withAvailability = await Promise.all(
            licences.map(async (licence) => {
                const usedCount = await Assignment.countDocuments({ licence: licence._id, active: true });
                return {
                    ...licence.toObject(),
                    usedCount,
                    available: licence.purchasedQuantity - usedCount,
                };
            })
        );
        res.json(withAvailability);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createLicence = async (req, res) => {
    const { product, licenceType, purchasedQuantity, purchaseDate, expiryDate } = req.body;
    try {
        const licence = await Licence.create({
            product, licenceType, purchasedQuantity, purchaseDate, expiryDate,
        });
        await writeAuditLog(req.user, 'created', product, `${purchasedQuantity} licences`);
        res.status(201).json(licence);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getLicences, createLicence };
