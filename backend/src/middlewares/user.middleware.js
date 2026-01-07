export function validateRegisterRequest(req, res, next) {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ error: "Missing information" })
    }
    next()
}

export function validateLoginRequest(req, res, next) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).json({ error: "Missing information" })
    }
    next()
}