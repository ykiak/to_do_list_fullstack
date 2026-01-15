import { apiFetch } from "../api/api.js"
import { handleError } from "./handleError.js"
import { renderTasks } from "./render.js"

export const listTasks = async () => {
    try{
        const response = await apiFetch("/task/list", {
            method: "GET"
        })
        renderTasks(response)
    }
    catch(error){
        handleError(error)
    }
}