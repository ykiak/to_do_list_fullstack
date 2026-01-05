import { prisma } from "../database/prisma"

export async function show(req, res) {
    const users = await prisma.user.findMany()
    return res.json(users)
}