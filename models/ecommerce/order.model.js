const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});


const orderSchema=new mongoose.Schema({

    oderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    oderItems:{
        type:[orderItemSchema],
    },
    address:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:['pending','delivered','cancelled'],
        default:'pending',
    },
})