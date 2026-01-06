import { prisma } from "../database/prisma"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function register(req, res) {
    const { name, email, password } = req.body
    // a first verification is necessary to avoid 500: Internal Server Error
    // when the request does not include an "email"
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing information" })
    }

    try {
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (userAlreadyExists) {
            res.status(409).json({ error: "Email already in use" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
        })
        return res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        })
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}

export async function login(req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ error: "Missing information" })
    }

    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!user) res.status(401).json({ error: "Invalid credentials" })

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            res.status(401).json({ error: "Invalid credentials" })
        }

        const token = jwt.sign(
            {id: user.id}, 
            process.env.JWT_SECRET_KEY,
            {expiresIn: process.env.JWT_EXPIRES_IN}
        )

        return res.json({token})

    } catch (error) {
        return res.status(500).json({error: "Internal server error"})
    }
}