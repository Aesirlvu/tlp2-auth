import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todos.controllers.js";
import { validateJwt } from "../middlewares/validar-jwt.js";

const todosRouter = Router();

todosRouter.get("/", validateJwt, getAllTodos);
todosRouter.post("/", validateJwt, createTodo);
todosRouter.put("/:id", validateJwt, updateTodo);
todosRouter.delete("/:id", validateJwt, deleteTodo);

export { todosRouter };
