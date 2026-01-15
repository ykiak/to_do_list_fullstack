import { tasks } from "./state.js"

export const selector = () => {
    const completed = tasks.all.filter(t => t.completed)
    return {
        all: tasks.all.length,
        completed: completed.length,
        pending: tasks.all.length - completed.length
    }
}