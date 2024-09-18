import { database } from "../db/database.js";

export const getAllTodos = (req, res) => {
  const todos = database.todos.filter((todo) => todo.owner === req.user.id);

  if (!todos.length) {
    return res.status(404).json({ message: "No hay tareas ❗", status: 404 });
  }

  return res.json({ todos });
};

export const createTodo = (req, res) => {
  const { title, isCompleted } = req.body;

  if (!req.user || !req.user.id) {
    return res
      .status(401)
      .json({ message: "No estás autorizado ❌", status: 401 });
  }

  if (!title) {
    return res
      .status(400)
      .json({ message: "El título no puede estar vacío ❓", status: 400 });
  }

  const todoExists = database.todos.some((todo) => todo.title === title);

  todoExists
    ? res.status(409).json({ message: "La tarea ya existe ❗", status: 409 })
    : null;

  const newTodo = {
    id: database.todos.length,
    title,
    isCompleted: isCompleted || false,
    owner: req.user.id,
  };

  database.todos.push(newTodo);
  return res.json({ message: "Tarea creada ✅", todo: newTodo });
};
export const updateTodo = (req, res) => {
  const { title, isCompleted } = req.body;

  const toUpdate = database.todos.find(
    (todo) => todo.id === parseInt(req.params.id, 10)
  );

  if (!toUpdate) {
    return res
      .status(404)
      .json({ message: "Tarea no encontrada ❓", status: 404 });
  }

  if (toUpdate.owner !== req.user.id) {
    return res
      .status(401)
      .json({ message: "No puedes modificar esta tarea ❌", status: 401 });
  }

  if (title !== undefined && title.trim() === "") {
    return res
      .status(400)
      .json({ message: "El título no puede estar vacío ❓", status: 400 });
  }

  if (title !== undefined) {
    toUpdate.title = title;
  }

  if (isCompleted !== undefined) {
    toUpdate.isCompleted = isCompleted;
  }

  return res.json({ message: "Tarea actualizada ✅", todo: toUpdate });
};
export const deleteTodo = (req, res) => {
  const user = req.user;

  const toDelete = database.todos.find(
    (todo) => todo.id === parseInt(req.params.id)
  );

  !user &&
    res.status(401).json({ message: "No estás autorizado ❌", status: 401 });

  if (!toDelete) {
    return res
      .status(404)
      .json({ message: "Tarea no encontrada ❓", status: 404 });
  }

  const index = database.todos.indexOf(toDelete);
  database.todos.splice(index, 1);

  return res.json({ message: "Tarea eliminada ✅" });
};
