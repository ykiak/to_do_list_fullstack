const logoutButton = document.querySelector("#logoutButton")

export const logout = () => {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.href = "/frontend/index.html"
    })
}