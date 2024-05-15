const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A task title is required'],
        unique: true,
        trim: true
    },
    description: {
        trim: true,
        type: String,
        required: [true, ' A task description is required']
    },
    dueDate: {
        type: Date,
        required: [true, ' A task due date is required']
    },
    priority: {
        type: String,
        required: [true, ' A task priority is required'],
        default: 'Normal'
    },
    status: {
        type: String,
        required: [true, 'A task progress is required']
    },
    createdAt: {
        type: Date,
        default: new Date().toISOString()
    }
})


const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;