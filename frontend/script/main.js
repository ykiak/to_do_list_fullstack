import { showTasks } from "./tasks/tasks.js"
import { login } from "./auth/login.js"
import { signUp } from "./auth/register.js"
import { requireAuth } from "./auth/require.auth.js"
import { logout } from "./auth/logout.js"

const page = document.body.dataset.page

switch(page){
    case "signup":
        signUp()
        break

    case "login":
        login()
        break
    
    case "test":
        requireAuth()
        showTasks()
        logout()
        break
}
