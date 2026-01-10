import { apiFetch } from "../api/api.js"

const message = document.querySelector("#message")
const form = document.querySelector("form")

export const signUp = () => {
    form.addEventListener("submit", async (event) => {
        event.preventDefault()

        message.textContent = ""

        const name = document.querySelector("#name").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        try {
            await apiFetch("/user/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password })
            })
            message.textContent = "User created successfully"
            window.location.href = "/frontend/index.html"

        }
        catch (error) {
            message.textContent = error.message
        }
    })
}