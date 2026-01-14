import { apiFetch } from "../api/api.js"

const form = document.querySelector("form")
const taskTitle = document.querySelector("#taskTitle")
const taskDescription = document.querySelector("#taskDescription")
const message = document.querySelector("#message")
const label1 = document.querySelector("#label1")
const label2 = document.querySelector("#label2")
const submitButton = document.querySelector("#submit")

export const formController = () => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()
        try {
            if (form.dataset.mode === "create") {
                await apiFetch("/task/create", {
                    method: "POST",
                    body: JSON.stringify({
                        title: taskTitle.value,
                        description: taskDescription.value
                    })
                })
                form.reset()

                document.dispatchEvent(new Event("task:created"))
            }
            else if (form.dataset.mode === "edit") {
                const id = form.dataset.taskId
                await apiFetch(`/task/edit/${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        title: taskTitle.value,
                        description: taskDescription.value
                    })
                })

                label1.textContent = "What is your new task?"
                label2.textContent = "Add a description"
                submitButton.textContent = "Create"

                delete form.dataset.taskId
                form.dataset.mode = "create"
                form.reset()

                document.dispatchEvent(new Event("task:updated"))
            }
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}