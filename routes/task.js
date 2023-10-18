const { Router } = require('express');
const { check } = require('express-validator');
const { getTask, postTask, deleteTask } = require('../controllers/task');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get('/get',getTask);

router.post('/post', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty(),
    check('fecha', 'La descripcion es obligatoria').not().isEmpty(),
    check('prioridad', 'La descripcion es obligatoria').not().isEmpty(),
    validarCampos
], postTask);

router.delete('/delete/:id', [
    check('id', 'No es un ID valido').isMongoId(),
    validarCampos
], deleteTask);

module.exports = router