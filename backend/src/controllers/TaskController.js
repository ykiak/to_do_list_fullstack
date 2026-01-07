let tasks = [
    {id: 1, name: "work", done: false},
    {id: 2, name: "soccer", done: false},
    {id: 3, name: "study", done: false}
]

export function showTasks(req, res){
    return res.json(tasks)
}