const AuditLog = require('../models/AuditLog');

const getAuditLogs = async (req, res) => {
    try {
        const logs = await AuditLog.find().sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAuditLogs };
