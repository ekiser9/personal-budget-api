const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    budget: {
        type: Schema.ObjectId,
        ref: 'budget', required: true },
}, { collection: 'month'});

module.exports = mongoose.model('month', monthSchema);