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

export async function findUserByTaskId(id) {
    return await prisma.task.findUnique({
        where: {
            id: id
        }, 
        select: {
            userId: true
        }
    })
}

export async function editTask(title, description, id) {
    return prisma.task.update({
        where: {
            id: id
        },
        data: {
            title: title,
            description: description
        }
    })
}