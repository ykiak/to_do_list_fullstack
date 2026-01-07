import { Router } from "express"
import { register, login } from "../controllers/UserControllers"
import { validateRegisterRequest } from "../middlewares/user.middleware"

const useRouter = Router()

useRouter.post("/register", validateRegisterRequest, register)
useRouter.post("/login", login)

export default useRouter