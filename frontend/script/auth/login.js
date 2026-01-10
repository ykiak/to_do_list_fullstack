import { apiFetch } from "../api/api.js"

const form = document.querySelector("form")
const message = document.querySelector("#message")

export const login = () => {
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
            window.location.href = "/frontend/test.html"
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}