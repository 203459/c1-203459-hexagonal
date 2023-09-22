const { Task } = require('../models/tareaModel');


const createTask = async (taskData) => {
  try {
    const newTask = await Task.create(taskData);
    return newTask;
  } catch (error) {
    throw new Error('No se puede crear la tarea.');
  }
};


const getAllTasks = async () => {
  try {
    const tasks = await Task.findAll();
    return tasks;
  } catch (error) {
    throw new Error('No se pueden obtener las tareas desde el servicio.');
  }
};

const getTaskById = async (taskId) => {
  try {
    const task = await Task.findOne({
      where: {
        id: taskId,
      },
      attributes: ['id', 'titulo','descripcion',"estado"]
    });

    
    return task;
  } catch (error) {
    throw new Error('No se puede obtener la tarea.');
  }
};

const updateTask = async (taskId, taskData, fecha_modificacion) => {
  try {
    const [updatedRows] = await Task.update(taskData, { where: { id: taskId } });
    if (updatedRows === 0) {
      return null;
    }
    const updatedTask = await Task.findByPk(taskId, fecha_modificacion);
    return updatedTask;
  } catch (error) {
    throw new Error('No se puede actualizar la tarea.');
  }
};

const deleteTask = async (taskId) => {
  try {
    const deletedTask = await Task.findByPk(taskId);
    if (!deletedTask) {
      return null;
    }
    await deletedTask.destroy();
    return deletedTask;
  } catch (error) {
    throw new Error('No se puede eliminar la tarea.');
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};

