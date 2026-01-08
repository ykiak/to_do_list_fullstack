import { findUserByTaskId } from "../services/task.service"

export function validateCreateOrEditTask(req, res, next) {
    const title = req.body.title

    if (!title) {
        return res.status(400).json({ error: "Missing information" })
    }

    next()
}

export async function validateUserId(req, res, next) {
    const userId = req.userId
    const taskId = Number(req.params.id)

    if (isNaN(taskId)) {
        return res.status(400).json({ error: "Invalid task id" })
    } //handle routes like edit/abc, with non-numeric params

    try {
        const task = await findUserByTaskId(taskId)

        if (!task) {
            return res.status(404).json({ error: "Task not found" })
        }
        if (task.userId !== userId) {
            return res.status(403).json({ error: "Forbidden" })
        } //user can only edit their own task
        next()
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}