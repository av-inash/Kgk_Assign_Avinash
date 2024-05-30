
const mongoose = require('mongoose');
const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    currentPrice: { type: Number, default: 0 },
    imageUrl: { type: String },
    endTime: { type: Date, required: true },
    // createdAt: { type: Date, default: Date.now }
}, { timestamps: true });
module.exports = mongoose.model('Item', ItemSchema);
