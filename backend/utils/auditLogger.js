const AuditLog = require('../models/AuditLog');

const writeAuditLog = async (user, action, target, details = '') => {
    try {
        await AuditLog.create({
            actor: user._id,
            actorName: user.name,
            action,
            target,
            details,
        });
    } catch (error) {
        console.error('Failed to write audit log:', error.message);
    }
};

module.exports = { writeAuditLog };
