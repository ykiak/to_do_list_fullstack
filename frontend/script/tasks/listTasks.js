import { apiFetch } from "../api/api.js"

const list = document.querySelector("#list")
const message = document.querySelector("#message")

export const listTasks = async () => {
    list.innerHTML = ""
    try{
        const response = await apiFetch("/task/list", {
            method: "GET"
        })
        response.forEach(task => {
            const editButton = document.createElement("button")
            const deleteButton = document.createElement("button")
            const doneButton = document.createElement("button")
            const li = document.createElement("li")

            editButton.textContent = "Edit"
            deleteButton.textContent = "Delete"
            doneButton.textContent = "Done"

            li.textContent = task.title

            li.append(editButton, deleteButton, doneButton)
            list.append(li)
        })
    }
    catch(error){
        if(error.message === "Invalid or expired token"){
            localStorage.removeItem("token")
            window.location.href = "/frontend/index.html"
        }
        message.textContent = error.message
    }
}