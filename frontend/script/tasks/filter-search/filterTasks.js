import { tasks } from "../counter/state.js"
import { renderTasks } from "../render/tasks/render.js"

const select = document.querySelector("#select")

export const filterTasks = () => {
    select.addEventListener("change", async () => {
        const status = select.value

        if (status === "all") {
            tasks.visible = tasks.all
        }
        else if (status === "pending") {
            tasks.visible = tasks.all.filter(t => !t.completed)
        }
        else {
            tasks.visible = tasks.all.filter(t => t.completed)
        }
        renderTasks(tasks.visible)
    })
}