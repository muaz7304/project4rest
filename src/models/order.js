const mongoose = require('mongoose');

// Schema
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
    table: Number,
    order: Array
});

// Model
const Order = mongoose.model('Order', OrderSchema);

module.exports = Order