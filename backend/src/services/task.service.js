import { prisma } from "../database/prisma"

export async function listTask(userId) {
    return prisma.task.findMany({
        where: { userId },
        select: {
            id: true,
            title: true,
            description: true,
            createdAt: true,
            completed: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })
}

export async function createTask(title, description, userId) {
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
        where: { id },
        select: {
            userId: true
        }
    })
}

export async function editTask(title, description, id) {
    return prisma.task.update({
        where: { id },
        data: { title, description }
    })
}

export async function deleteTask(id) {
    return prisma.task.delete({
        where: { id }
    })
}
