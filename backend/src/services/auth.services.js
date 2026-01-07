import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function verifyPassword(user, password) {
    const isPasswordValid = await bcrypt.compare(password, user.password)
    return isPasswordValid
}

export function generateToken(userId) {
    return jwt.sign(
        { id: userId },
        process.env.JWT_SECRET_KEY,
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}