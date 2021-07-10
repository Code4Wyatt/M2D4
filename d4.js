// Create function that adds a name to waiting list

const inputName = document.querySelector("#input-name") // variable to target the name input section (has id #input-name)
const teamQueue = document.querySelector("#team-queue") //variable to target the waiting list section so we can append to it

function addPerson(event) {
    event.preventDefault()

    const li = document.createElement("li") // creating new list element
    li.classList.add("list-group-item") // giving it a class of list-group-item

    teamQueue.appendChild(li) // appending/adding the new li element to the team queue
}