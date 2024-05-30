
const mongoose = require('mongoose');
const BidSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
        required: true
    },

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true

    },

    bidAmount: {
        type: Number,
        required: true

    },



}, { timestamps: true });
module.exports = mongoose.model('Bid', BidSchema);
