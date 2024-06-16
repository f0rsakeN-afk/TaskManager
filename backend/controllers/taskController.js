const Task = require('../models/taskModel');

// Get all tasks
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: {
                tasks
            }
        });
    } catch (err) {
        res.status(500).json({
            status: 'failed',
            message: err.message
        });
    }
};

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                task: newTask
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

// Get a single task
exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: 'Task not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

// Update a task
exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: 'Task not found'
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};

// Delete a task
exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({
                status: 'failed',
                message: 'Task not found'
            });
        }
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(400).json({
            status: 'failed',
            message: err.message
        });
    }
};
