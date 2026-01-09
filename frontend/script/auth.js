import { apiFetch } from "./api.js"

const message = document.querySelector("#message")
const button = document.querySelector("#submitButton")

export const signUp = () => {
    button.addEventListener("click", async (event) => {
        event.preventDefault()
        
        const name = document.querySelector("#name").value
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value

        try {
            await apiFetch("/user/register", {
                method: "POST",
                body: JSON.stringify({ name, email, password })
            })
            message.textContent = "User created successfully"
            setTimeout(() =>{window.location.href = "http://127.0.0.1:5500/frontend/index.html"
            }, 3000)
        }
        catch (error) {
            message.textContent = error.message
        }
    })
}