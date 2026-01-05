import { prisma } from "../database/prisma"
import bcrypt from "bcryptjs"

export async function register(req, res) {
    const {name, email, password} = req.body
    const userAlreadyExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(!name || !email || !password){
        return res.status(400).json({error: "Missing information"})
    }

    if(userAlreadyExists){
        return res.status(409).json({error: "Email already in use"})
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })
    return res.status(201).json({
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
    })
}