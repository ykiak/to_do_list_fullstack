export async function validateCreateTask(req, res, next) {
    const title = req.body.title

    if(!title){
        res.status(400).json({error: "Missing information"})
    }

    next()
}