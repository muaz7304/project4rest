const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const FoodEntrySchema = new Schema({
    title: String,
    desc: String
});

// Model
const FoodEntry = mongoose.model('FoodEntry', FoodEntrySchema);

module.exports = FoodEntry