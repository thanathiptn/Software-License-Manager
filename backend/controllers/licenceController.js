const Licence = require('../models/Licence');

const getLicences = async (req, res) => {
    try {
        const licences = await Licence.find().sort({ product: 1 });
        res.json(licences);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getLicences };