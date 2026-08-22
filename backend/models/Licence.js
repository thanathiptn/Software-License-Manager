const mongoose = require('mongoose');

const licenceSchema = new mongoose.Schema({
    product: { type: String, required: true },
    licenceType: { type: String, required: true },
    purchasedQuantity: { type: Number, required: true, min: 0 },
    purchaseDate: { type: Date },
    expiryDate: { type: Date },
    status: { type: String, enum: ['active', 'expired'], default: 'active' },
}, { timestamps: true });

module.exports = mongoose.model('Licence', licenceSchema);
