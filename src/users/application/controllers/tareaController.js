const taskService = require('../services/tareaService');


exports.getAllTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  if (tasks === null) {
    res.status(500).json({ error: 'No se pueden obtener las tareas desde el servicio.' });
  } else {
    res.json(tasks);
  }
};

exports.createTask = async (req, res) => {
  const { titulo, descripcion} = req.body; 
  try {
    const newTask = await taskService.createTask({ titulo, descripcion}); 
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: 'No se puede crear la tarea.' });
  } 
};

exports.getTaskById = async (req, res) => {
  const taskId = req.params.id;
  try {
    const task = await taskService.getTaskById(taskId);
    if (!task) {
      res.status(404).json({ error: 'Tarea no encontrada.' });
    } else {
      res.json(task);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se puede obtener la tarea.' });
  }
};

exports.updateTask = async (req, res) => {
  const taskId = req.params.id;
  //const { estado } = req.body; // Cambio de nombres de propiedades
  try {
    const updatedTask = await taskService.updateTask(taskId, { estado:true}); // Cambio de nombres de propiedades
    if (!updatedTask) {
      res.status(404).json({ error: 'Tarea no encontrada.' });
    } else {
      res.json(updatedTask);
    }
  } catch (error) {
    res.status(500).json({ error: 'No se puede actualizar la tarea.' });
  }
};

exports.deleteTask = async (req, res) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await taskService.deleteTask(taskId);
    if (!deletedTask) {
      res.status(404).json({ error: 'Tarea no encontrada.' });
    } else {
      res.json({ message: 'Tarea eliminada exitosamente.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'No se puede eliminar la tarea.' });
  }
};

