import express from "express";
const router = express.Router();

import { hello } from "./Controllers/helloController";
import { createTodo, deleteTodo, todo } from "./Controllers/todoController";

router.get("/hello", hello);

router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.get("/", todo);

export default router;