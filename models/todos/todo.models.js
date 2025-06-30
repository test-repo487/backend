const mongoose = require('mongoose');

const TodoSchema=new mongoose.Schema({

    content:{
        type:String,
        required:true,
    },
    complete: {
        type:Boolean,
        default:false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subTodos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubTodo"
    }],  // Array of sub-todo IDs

},{timestamps:true});

export const User=mongoose.model('SubTodo',TodoSchema);