import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    tid:{
        type:Number,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    assignedTo: {
        type:Number,
    },
    statuss: {
        type: String,
    },
    dueDate: {
        type: Date,
    },
    progressUpdates: [{
        date: {
            type: Date,
            default: Date.now,
        },
        update: {
            type: String,
            required: true,
        },
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
