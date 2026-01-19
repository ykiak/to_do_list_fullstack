const list = document.querySelector("#list")

export const renderTasks = (taskList) => {
    list.innerHTML = ""

    taskList.forEach(task => {
        const tooltip = document.createElement("div")
        const divButton = document.createElement("div")

        const editButton = document.createElement("button")
        const deleteButton = document.createElement("button")
        const doneButton = document.createElement("button")
        const li = document.createElement("li")
        const title = document.createElement("p")
        const description = document.createElement("p")

        tooltip.className = "tooltip"
        divButton.className = "divButton"
        editButton.className = "edit"
        deleteButton.className = "delete"
        doneButton.className = "doneButton"
        title.className = task.completed ? "undone" : "done"
        description.className = "tooltipText"

        editButton.textContent = "Edit"
        deleteButton.textContent = "Delete"
        doneButton.textContent = task.completed ? "Undone" : "Done"
        title.textContent = task.title
        description.textContent = task.description

        li.id = task.id

        tooltip.append(title, description)
        divButton.append(editButton, deleteButton, doneButton)
        li.append(tooltip, divButton)
        list.append(li)
    })

}