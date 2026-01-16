import { tasks } from "../counter/state.js"
import { renderTasks } from "../render/tasks/render.js"

const searchInput = document.querySelector("#search")

export const searchTasks = () => {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim()

        const results = tasks.visible.filter(task => 
            task.title.toLowerCase().trim().includes(query)
        )

        renderTasks(results)
    })
}