import express from "express"
import useRouter from "./routes/userRoutes.js"
import taskRouter from "./routes/taskRoutes.js"

const app = express()

app.use(express.json())

app.use("/user", useRouter)
app.use("/task", taskRouter)

export default app