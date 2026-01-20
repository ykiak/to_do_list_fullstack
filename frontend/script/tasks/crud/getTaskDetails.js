import { apiFetch } from "../../api/api.js"
import { handleError } from "../../helpers/handleError.js"

const list = document.querySelector("#list")
const taskTitle = document.querySelector("#taskTitle")
const taskDescription = document.querySelector("#taskDescription")
const form = document.querySelector("form")
const label1 = document.querySelector("#label1")
const label2 = document.querySelector("#label2")
const submitButton = document.querySelector("#submit")

export const getTaskDetails = () => {
    list.addEventListener("click", async (event) => {
        const editButton = event.target.closest(".edit")
        if (!editButton) return

        const deleteButton = editButton.nextElementSibling
        deleteButton.disabled = true
        const doneButton = deleteButton.nextElementSibling
        doneButton.disabled = true

        const li = editButton.closest("li")
        const id = Number(li.id) //li.id is a string

        taskTitle.focus()
        try {
            const response = await apiFetch("/task/list", {
                method: "GET"
            })
            const task = response.filter(task => task.id === id) //task.id is a number
            taskTitle.value = task[0].title
            taskDescription.value = task[0].description

            label1.textContent = "Edit task title"
            label2.textContent = "Edit task description"
            submitButton.textContent = "Save"

            form.dataset.mode = "edit"
            form.dataset.taskId = id
        }
        catch (error) {
            handleError(error)
        }
    })
}


