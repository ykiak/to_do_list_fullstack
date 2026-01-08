import { createTask } from "../services/task.service"
import { findUserNameById } from "../services/user.services"

export async function createTasks(req, res){
    const {title, description} = req.body
    const userId = req.userId
    try{
        const newTask = await createTask(title, description, userId)
        const userName = await findUserNameById(userId)
        return res.status(201).json({
            id: newTask.id,
            title: newTask.title,
            description: newTask.description,
            createdBy: userName
        })
    }
    catch(error){
        return res.status(500).json({error: "Internal server error"})
    }
}