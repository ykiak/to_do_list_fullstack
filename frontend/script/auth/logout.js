const logoutButton = document.querySelector("#logoutButton")

export const logout = () => {
    //require auth (redirect if user is not authorized)
    const token = localStorage.getItem("token")
    if(!token){
        window.location.href = "/frontend/index.html"
    }

    //manual logout
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.href = "/frontend/index.html"
    })

}