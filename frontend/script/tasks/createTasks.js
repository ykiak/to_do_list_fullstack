import { apiFetch } from "../api/api.js"

const form = document.querySelector("form")
const message = document.querySelector("#message")

export const createTasks = () => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        
        let title = document.querySelector("#taskTitle").value
        let description = document.querySelector("#taskDescription").value
        
        try {
            await apiFetch("/task/create", {
                method: "POST",
                body: JSON.stringify({title, description})
            })
            form.reset()

            document.dispatchEvent(new Event("task:created"))
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}