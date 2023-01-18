const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    cus_name: String,
    cus_address: String,
    cus_tel: String,
    cus_unit: Number,
    success: { type: Boolean, default: false },
    updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', OrderSchema)