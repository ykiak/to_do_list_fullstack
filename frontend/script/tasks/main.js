import { createTasks } from "./createTasks.js"
import { listTasks } from "./listTasks.js"
import { logout } from "../auth/logout.js"
import { deleteTasks } from "./deleteTasks.js"
import { toggleTasks } from "./toggleTasks.js"

document.addEventListener("task:created", listTasks)
document.addEventListener("task:deleted", listTasks)
document.addEventListener("task:toggled", listTasks)

logout()
listTasks()
createTasks()
deleteTasks()
toggleTasks()