const mongoose = require('mongoose');

const auditLogSchema = new mongoose.Schema({
    actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    actorName: { type: String, required: true },
    action: { type: String, enum: ['created', 'updated', 'deleted', 'assigned', 'revoked'], required: true },
    target: { type: String, required: true },
    details: { type: String },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AuditLog', auditLogSchema);
