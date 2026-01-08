import { Router } from "express"
import { createTasks } from "../controllers/TaskController"
import { authMiddleware } from "../middlewares/auth.middleware"
import { validateCreateTask } from "../middlewares/task.middleware"

const taskRouter = Router()

taskRouter.post("/create", authMiddleware, validateCreateTask, createTasks)

export default taskRouter