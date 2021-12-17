const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: true,
    },
    storeLogoURL: {
        type: String,
        required: true,
    },
    telephoneNumber: [{
        type: Number,
        required: true,
    }],
    email: {
        type: String,
        required: true,
    },
    storeCategories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true,
    }]
});

module.exports = storeSchema;
