import { prisma } from "../database/prisma"
import bcrypt from "bcryptjs"

export async function findUserNameById(userId) {
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    })
    return user.name
}

export async function findUserByEmail(email){
    return prisma.user.findUnique({
        where: { email }
    })
}

export async function registerUser(name, email, password){
    const hashedPassword = await bcrypt.hash(password, 10)
    return prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
}
