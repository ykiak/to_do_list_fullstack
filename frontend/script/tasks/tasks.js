import { apiFetch } from "../api/api.js"

export const showTasks = async () => {
    try {
        const response = await apiFetch("/task/list", {
            method: "GET"
        })
        console.log(response)
    }
    catch (error) {
        if (error.message === "Unauthorized" || error.message === "Invalid or expired token") {
            localStorage.removeItem("token")
            window.location.href = "/frontend/index.html"
        } else {
            console.error(error)
        }
    }
}