const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const speciesSchema = new Schema({
    speciesName: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minLength: 5
    },
}, {
    timestamps: true,
});

const Species = mongoose.model('Species', speciesSchema);

module.exports = Species;