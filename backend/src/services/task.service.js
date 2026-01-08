import { prisma } from "../database/prisma"

export async function createTask(title, description, userId){
    return prisma.task.create({
        data: {
            title,
            description,
            userId
        }
    })
}