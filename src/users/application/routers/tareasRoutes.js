const express = require('express');
const router = express.Router();
const crudController = require('../controllers/tareaController');

router.get('/tareas', crudController.getAllTasks);
router.post('/tareas', crudController.createTask);
router.get('/tareas/:id', crudController.getTaskById);
router.put('/tareas/:id', crudController.updateTask);

router.delete('/tareas/:id', crudController.deleteTask);

module.exports = router;
