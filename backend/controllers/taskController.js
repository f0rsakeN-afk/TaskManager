const Task = require('./../models/taskModel');

exports.getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    try {
        res.status(200).json({
            status: 'success',
            results: tasks.length,
            data: {
                tasks
            }
        })
    } catch (err) {
        res.status(404)
            .json({
                status: 'failed',
                message: err
            })
    }
}


exports.createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                task: newTask
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}


exports.getTask = async (req, res) => {
    const task = await Task.findById(req.params.id);
    try {
        res.status(200).json({
            status: 'success',
            data: {
                task
            }
        })
    } catch (err) {
        res.status(404).json({
            status: 'failed',
            message: err
        })
    }
}

exports.updateTask = (req, res) => {

}

exports.deleteTask = (req, res) => {

}