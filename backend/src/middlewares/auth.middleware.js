import jwt from "jsonwebtoken"

export function authMiddleware(req, res, next){
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({ error: "Unauthorized" })
    }

    //expected authorization: Bearer TOKEN
    //.split(" ") => convert authorization into an array [Bearer, TOKEN]
    const parts = authorization.split(" ")
    if (parts.length !== 2){
        return res.status(401).json({ error: "Invalid token format" })
    }

    const [scheme, token] = parts
    if(scheme !== "Bearer"){
        return res.status(401).json({ error: "Invalid token format" })
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        //decoded is an object {id: user.id, iat, exp}
        req.userId = decoded.id

        next()
    }
    catch (error){
        return res.status(401).json({ error: "Invalid or expired token" })
    }
}