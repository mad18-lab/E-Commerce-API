const mongoose = require('mongoose');
const ObjId = mongoose.Schema.Types.ObjId

const cartSchema = new mongoose.Schema({
    owner: {
        type: ObjId,
        required: true,
        ref: 'Users'
    },
    items: [{
        itemId: {
            type: ObjId,
            ref: 'Items',
            required: true
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
})

const Cart = mongoose.Model('Cart', cartSchema);
module.exports(Cart);