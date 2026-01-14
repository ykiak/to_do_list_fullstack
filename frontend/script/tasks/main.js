import { listTasks } from "./listTasks.js"
import { logout } from "../auth/logout.js"
import { deleteTasks } from "./deleteTasks.js"
import { toggleTasks } from "./toggleTasks.js"
import { getTaskDetails } from "./getTaskDetails.js"
import { formController } from "./formController.js"

document.addEventListener("task:created", listTasks)
document.addEventListener("task:deleted", listTasks)
document.addEventListener("task:toggled", listTasks)
document.addEventListener("task:updated", listTasks)

logout()
listTasks()
deleteTasks()
toggleTasks()
getTaskDetails()
formController()