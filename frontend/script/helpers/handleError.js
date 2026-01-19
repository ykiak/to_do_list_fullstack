const message = document.querySelector("#message")

export const handleError = (error) => {
    if (error.message === "Invalid or expired token") {
        localStorage.removeItem("token")
        return window.location.href = "/frontend/index.html"
    }
    message.textContent = error.message
    message.className = "error"
}