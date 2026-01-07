import { prisma } from "../database/prisma"
import bcrypt from "bcryptjs"

export async function findUserByEmail(email){
    const user = await prisma.user.findUnique({
        where: {
            email: email
        }
    })
    return user
}

export async function registerUser(name, email, password){
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    })
    return newUser
}
