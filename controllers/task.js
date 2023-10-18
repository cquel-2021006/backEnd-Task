const { request, response } = require('express');
const Task = require('../models/task');

const getTask = async (req = request, res = response ) => {
    try {
        const listTask = await Task.find();
        res.status(200).json(listTask);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servidor', error });
    }
}

const postTask = async (req = request, res = response) => {
    const { nombre, descripcion, fecha, prioridad} = req.body;

    const taskDB = new Task({
        nombre, descripcion, fecha, prioridad
    });

    await taskDB.save();

    res.json({
        msg: 'Post Api - Post Task',
        taskDB
    })
}

const deleteTask = async (req = request, res = response ) => {
    const { id } = req.params;

    const taskDelete = await Task.findByIdAndDelete(id);

    res.json({
        msg: 'Delete Api - Delete',
        taskDelete
    })
}

module.exports = {
    getTask,
    postTask,
    deleteTask
}