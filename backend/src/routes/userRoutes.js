import { Router } from "express"
import { register } from "../controllers/UserControllers"

const router = Router()

router.post("/register", register)

export default router