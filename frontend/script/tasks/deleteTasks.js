import { apiFetch } from "../api/api.js"
import { handleError } from "./handleError.js"

const list = document.querySelector("#list")

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
            handleError(error)
        }
    })
}