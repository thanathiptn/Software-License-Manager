const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
    licence: { type: mongoose.Schema.Types.ObjectId, ref: 'Licence', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    assignedAt: { type: Date, default: Date.now },
    active: { type: Boolean, default: true },
});

module.exports = mongoose.model('Assignment', assignmentSchema);
