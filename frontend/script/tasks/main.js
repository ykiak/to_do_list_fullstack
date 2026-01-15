import {listTasks} from "./crud/listTasks.js"
import { logout } from "../auth/logout.js"
import { deleteTasks } from "./crud/deleteTasks.js"
import { toggleTasks } from "./crud/toggleTasks.js"
import { getTaskDetails } from "./crud/getTaskDetails.js"
import { formController } from "./crud/formController.js"
import { filterTasks } from "./filter-search/filterTasks.js"
import { renderCounter } from "./render/counter/render.js"

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
filterTasks()
setTimeout(() => renderCounter(), 500)