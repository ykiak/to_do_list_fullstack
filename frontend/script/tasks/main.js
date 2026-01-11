import { createTasks } from "./createTasks.js"
import { listTasks } from "./listTasks.js"
import { logout } from "../auth/logout.js"

document.addEventListener("task:created", listTasks)

logout()
listTasks()
createTasks()