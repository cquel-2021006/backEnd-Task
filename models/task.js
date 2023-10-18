const {Schema, model} = require('mongoose');

const TaskSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    fecha: {
        type: Date,
        required: true
    },
    prioridad: {
        type: Number,
        required: true
    }
})

module.exports = model('Task', TaskSchema);