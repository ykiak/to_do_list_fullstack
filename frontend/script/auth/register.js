import { apiFetch } from "../api/api.js" 
import { handleError } from "../helpers/handleError.js"

const message = document.querySelector("#message")
const form = document.querySelector("form")

const signUp = () => {
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
            message.className = "success"
            setTimeout(() => {
                window.location.href = "/frontend/index.html"
            }, 2000)

        }
        catch (error) {
            handleError(error)
        }
    })
}

signUp()