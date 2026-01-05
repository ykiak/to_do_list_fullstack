import { Router } from "express"
import { show } from "../controllers/TestUserControllers"

const router = Router()

router.get("/", show)

export default router