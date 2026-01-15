
import { apiFetch } from "../api/api.js"
import { handleError } from "./handleError.js"
import { renderTasks } from "./render.js"

const select = document.querySelector("#select")

export const filterTasks = () => {
    select.addEventListener("change", async () => {
        const status = select.value

        try {
            const response = await apiFetch(`/task/filter?status=${status}`, {
                method: "GET",
            })
            renderTasks(response)
        }
        catch (error) {
            handleError(error)
        }
    })
}