import { apiFetch } from "../api/api.js"

const list = document.querySelector("#list")
const message = document.querySelector("#message")

export const deleteTasks = () => {
    list.addEventListener("click", async (event) => {
        const deleteButton = event.target.closest(".delete")
        if(!deleteButton) return 
        const li = deleteButton.closest("li")
        
        const id = li.id
        try{
            await apiFetch(`/task/delete/${id}`,{
                method: "DELETE"
            })
            document.dispatchEvent(new Event("task:deleted"))
        }
        catch(error){
            message.textContent = error.message
        }
    })
}