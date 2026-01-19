const message = document.querySelector("#message")

export const handleError = (error) => {
    if (error.message === "Invalid or expired token") {
        localStorage.removeItem("token")
        return window.location.href = "/frontend/index.html"
    }
    else if (error.message === "Invalid credentials") {
        message.className = "error"
    }
    message.textContent = error.message
}