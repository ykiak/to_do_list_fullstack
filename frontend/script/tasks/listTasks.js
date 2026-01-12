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
            const p =document.createElement("p")

            deleteButton.className = "delete"
            doneButton.className = task.completed ? "undoneButton" : "doneButton"
            p.className = task.completed ? "undone" : "done"

            editButton.textContent = "Edit"
            deleteButton.textContent = "Delete"
            doneButton.textContent = task.completed ? "Undone" : "Done"
            p.textContent = task.title

            li.id = task.id

            li.append(editButton, deleteButton, doneButton, p)
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