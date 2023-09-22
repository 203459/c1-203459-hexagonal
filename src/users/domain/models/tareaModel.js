const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db.js'); 

const Task = sequelize.define('Task', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN, 
    defaultValue: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
});

(async () => {
  try {
    await sequelize.sync();
    console.log('Modelo sincronizado con la base de datos.');
  } catch (error) {
    console.error('Error al sincronizar el modelo con la base de datos:', error);
  }
})();

const createTask = async (Task) => {
  try {
    const newTask = await Task.create(taskData);
    return newTask;
  } catch (error) {
    throw new Error('No se puede crear la tarea.');
  }
};

const getTaskById = async (taskId) => {
  try {
    const task = await Task.findByPk(taskId);
    return task;
  } catch (error) {
    throw new Error('No se puede obtener la tarea.');
  }
};

const updateTask = async (taskId, taskData,fecha_modificacion) => {
  try {
    const [updatedRows] = await Task.update(taskData, { where: { id: taskId } });
    if (updatedRows === 0) {
      return null;
    }
    const updatedTask = await Task.findByPk(taskId,fecha_modificacion,true);
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
  Task,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
