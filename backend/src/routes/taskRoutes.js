import { Router } from "express"
import { showTasks } from "../controllers/TaskController"
import { authMiddleware } from "../middlewares/auth.middleware"

const taskRouter = Router()

taskRouter.get("/", authMiddleware, showTasks)

export default taskRouter