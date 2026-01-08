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

export async function toggleCompleted(id) {
    const task = await prisma.task.findUnique({
        where: { id }
    })
    //this check is unnecessary because there is a middleware
    //that checks if a task exists by id. However, we added this to
    //make the service independent
    if (!task) {
        throw new Error("Task not found")
    }

    return prisma.task.update({
        where: { id },
        data: { completed: !task.completed }
    })
}

export async function filterTasksByStatus(userId, status) {
    if (status === "all") {
        return listTask(userId)
    } else if (status === "completed") {
        return prisma.task.findMany({
            where: { userId, completed: true },
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
    } else if (status === "pending") {
        return prisma.task.findMany({
            where: { userId, completed: false },
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
    } else {
        throw new Error("Invalid filter value")
    }
}