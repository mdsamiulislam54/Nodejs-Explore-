import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true, 
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default todoSchema; 
