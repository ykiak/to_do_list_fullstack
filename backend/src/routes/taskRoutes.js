import { Router } from "express"
import {
    createTaskController,
    editTaskController,
    deleteTaskController,
    listTaskController,
    toggleTaskController,
} from "../controllers/TaskController"
import { authMiddleware } from "../middlewares/auth.middleware"
import { validateCreateOrEditTask, validateUserId } from "../middlewares/task.middleware"

const taskRouter = Router()

taskRouter.get("/list", authMiddleware, listTaskController)
taskRouter.post("/create", authMiddleware, validateCreateOrEditTask, createTaskController)
taskRouter.put("/edit/:id", authMiddleware, validateUserId, validateCreateOrEditTask, editTaskController)
taskRouter.delete("/delete/:id", authMiddleware, validateUserId, deleteTaskController)
taskRouter.put("/toggle/:id", authMiddleware, validateUserId, toggleTaskController)

export default taskRouter