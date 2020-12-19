const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'user', required: true },
}, { collection: 'budget'});

module.exports = mongoose.model('budget', userSchema);