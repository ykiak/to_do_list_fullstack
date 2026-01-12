import { apiFetch } from "../api/api.js"

const list = document.querySelector("#list")
const message = document.querySelector("#message")

export const toggleTasks = () => {
    list.addEventListener("click", async (event) => {
        const doneButton = event.target.closest(".doneButton") || event.target.closest(".undoneButton")
        if (!doneButton) return

        const li = doneButton.closest("li")
        const id = li.id

        try {
            await apiFetch(`/task/toggle/${id}`, {
                method: "PUT"
            })

            document.dispatchEvent(new Event("task:toggled"))
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}