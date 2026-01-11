import { apiFetch } from "../api/api.js"

const form = document.querySelector("form")
const message = document.querySelector("#message")

const login = () => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        try {
            const response = await apiFetch("/user/login", {
                method: "POST",
                body: JSON.stringify({ email, password })
            })
            message.textContent = "Login successful"
            localStorage.setItem("token", response.token)
            setTimeout(() => {
                window.location.href = "/frontend/task.html"
            }, 2000)
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}

login()