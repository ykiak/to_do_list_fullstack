import { createTask, editTask } from "../services/task.service"
import { findUserNameById } from "../services/user.services"

export async function createTaskController(req, res) {
    const { title, description } = req.body
    const userId = req.userId
    try {
        const newTask = await createTask(title, description, userId)
        const userName = await findUserNameById(userId)
        return res.status(201).json({
            id: newTask.id,
            title: newTask.title,
            description: newTask.description,
            createdBy: userName
        })
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}

export async function editTaskController(req, res) {
    const { title, description } = req.body
    const taskId = Number(req.params.id)

    try {
        const updatedTask = await editTask(title, description, taskId)
        return res.status(200).json({
            id: updatedTask.id,
            title: updatedTask.title,
            description: updatedTask.description
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" })
    }
}