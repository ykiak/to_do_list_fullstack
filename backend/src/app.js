import express from "express"
import cors from "cors"
import useRouter from "./routes/userRoutes.js"
import taskRouter from "./routes/taskRoutes.js"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/user", useRouter)
app.use("/task", taskRouter)

export default app