const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'A task title is required'],
        unique: true,
        trim: true,
        minlength: [10, 'Title should be more than 10 characters'],
        maxlength: [50, 'Title should be less than 50 characters']
    },
    description: {
        type: String,
        required: [true, 'A task description is required'],
        trim: true
    },
    dueDate: {
        type: Date,
        required: [true, 'A task due date is required']
    },
    priority: {
        type: String,
        required: [true, 'A task priority is required'],
        enum: {
            values: ['low', 'normal', 'medium', 'high'],
            message: 'Priority should be either low, normal, medium or high'
        }
    },
    status: {
        type: String,
        required: [true, 'A task progress is required'],
        enum: {
            values: ['pending', 'running', 'completed'],
            message: 'Status should be either pending, running or completed'
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Task = mongoose.model('tasks', taskSchema);
module.exports = Task;

