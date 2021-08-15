const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const geckoSchema = new Schema({
    geckoName: { type: String, required: true },
    description: { type: String, required: true },
    hatchDate: { type: Date, required: true },
    gender: { type: String, required: true },
    purchasePrice: { type: Number, required: true },
}, {
    timestamps: true,
});

const Gecko = mongoose.model('Gecko', geckoSchema);

module.exports = Gecko;