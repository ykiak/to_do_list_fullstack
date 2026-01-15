import { apiFetch } from "../../api/api.js"
import { handleError } from "../helpers/handleError.js"
import { renderTasks } from "../render/tasks/render.js"
import { tasks } from "../counter/state.js"
import { renderCounter } from "../render/counter/render.js"

export const listTasks = async () => {
    try {
        const response = await apiFetch("/task/list", {
            method: "GET"
        })
        tasks.all = response
        tasks.visible = response
        renderTasks(tasks.visible)
        renderCounter()
    }
    catch (error) {
        handleError(error)
    }
}