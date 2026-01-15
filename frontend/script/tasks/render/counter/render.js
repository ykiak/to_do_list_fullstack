import { selector } from "../../counter/selector.js"

const counter = document.querySelector("#counter")

export const renderCounter = () => {
    const tasks = selector()

    counter.textContent = `You have ${tasks.all} tasks, ${tasks.completed} completed and ${tasks.pending} pending`
}