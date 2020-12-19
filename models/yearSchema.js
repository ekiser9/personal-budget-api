const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const yearSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Schema.ObjectId,
        ref: 'budget', required: true },
}, { collection: 'year'});

module.exports = mongoose.model('year', yearSchema);