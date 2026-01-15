const list = document.querySelector("#list")

export const renderTasks = (taskList) => {
    list.innerHTML = ""
    taskList.forEach(task => {
        const editButton = document.createElement("button")
        const deleteButton = document.createElement("button")
        const doneButton = document.createElement("button")
        const li = document.createElement("li")
        const p = document.createElement("p")

        editButton.className = "edit"
        deleteButton.className = "delete"
        doneButton.className = task.completed ? "undoneButton" : "doneButton"
        p.className = task.completed ? "undone" : "done"

        editButton.textContent = "Edit"
        deleteButton.textContent = "Delete"
        doneButton.textContent = task.completed ? "Undone" : "Done"
        p.textContent = task.title

        li.id = task.id

        li.append(p, editButton, deleteButton, doneButton)
        list.append(li)
    })
}