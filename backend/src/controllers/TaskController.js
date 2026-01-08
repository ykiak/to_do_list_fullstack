import { createTask, deleteTask, editTask, findTaskById, listTask, toggleCompleted } from "../services/task.service"
import { findUserNameById } from "../services/user.services"

export async function listTaskController(req, res) {
    const userId = req.userId
    try{
        const tasks = await listTask(userId)
        return res.status(200).json(tasks)
    }
    catch(error){
        return res.status(500).json({error: "Internal server error"})
    }
}

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
        return res.status(500).json({ error: "Internal server error" })
    }
}

export async function deleteTaskController(req, res) {
    const taskId = Number(req.params.id)

    try{
        await deleteTask(taskId)
        return res.status(204).send()
    }
    catch(error){
        return res.status(500).json({error: "Internal server error"})
    }
}

export async function toggleTaskController(req, res) {
    const taskId = Number(req.params.id)
    try{
        const task = await toggleCompleted(taskId)
        return res.status(200).json({
            id: taskId,
            title: task.title,
            description: task.description,
            completed: task.completed,
            createdAt: task.createdAt 
        })
    }
    catch(error){
        if(error.message === "Task not found"){
            return res.status(404).json({error: error.message})
        }
        return res.status(500).json({error: "Internal server error"})
    }
}
