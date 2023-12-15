const mongoose = require('mongoose');
const ObjID = mongoose.schema.Types.ObjID;

const itemSchema = new mongoose.Schema({
    owner : {
        type: ObjID,
        required: true,
        ref: 'Users'
    },
    name : {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Items = mongoose.model('Items', itemSchema)
module.exports(Items)