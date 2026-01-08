import { findUserByEmail, registerUser } from "../services/user.services"
import { generateToken, verifyPassword } from "../services/auth.services"


export async function register(req, res) {
    const { name, email, password } = req.body
    try {
        const userAlreadyExists = await findUserByEmail(email)
        if (userAlreadyExists) {
            return res.status(409).json({ error: "Email already in use" })
        }

        const newUser = await registerUser(name, email, password)

        return res.status(201).json({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        })
    } 
    catch (error) {
        return res.status(500).json({ error: "Internal server error" })
    }
}

export async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await findUserByEmail(email)
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        const isPasswordValid = await verifyPassword(user, password)
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        const token = generateToken(user.id)
        return res.json({ token })
    } 
    catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" })
    }
}