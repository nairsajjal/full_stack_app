const mongoose = require("mongoose");
const Schema  = mongoose.Schema;

const DataSchema = new Schema({
    invoice_number: {
        type: Number,
        required: 'This field is required.'
    },
    invoice_from: {
        type: String,
        required: 'this field is required.'
    },
    invoice_to: {
        type: String,
        required: 'this field is required.'
    },
    date: { 
        type: String

    },
    due_date:{
        type: String
    },
    items_id: {
        type: Number
    },
    items_type: {
        type: String
    },
    items_quantity: {
        type: Number
    },
    items_price:{
        tupe: Number
    },
    items_amount: {
        type: Number
    },
    sub_total: {
        type: Number
    },
    discounts: {
        type: Number
    },
    tax: {
        type: Number
    },
    shipping: {
        type: Number
    },
    total: {
        type: Number
    }
});

module.exports = mongoose.model("Data", DataSchema);