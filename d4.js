// Create function that adds a name to waiting list

const inputName = document.querySelector("#input-name") // variable to target the name input section (has id #input-name)
const teamQueue = document.querySelector("#team-queue") // variable to target the waiting list section so we can append to it

const teamsN = document.querySelector("#teams-number")
const teamsRow = document.querySelector("#teams-row")

function addPerson(event) {
    event.preventDefault()

    const li = document.createElement("li") // creating new list element
    li.classList.add("list-group-item") // giving it a class of list-group-item
    li.innerHTML = inputName.value // making the inner contents of the list item to be the submitted value from name input

    teamQueue.appendChild(li) // appending/adding the new li element to the team queue
}

// creating teams section

window.onload = function () {      // window onload to call function when window is displayed
    createTeams()  // function we are calling
}

function createTeams() {
    for (let i = 0; i < teamsN.innerHTML; i++) {    // used for loop to declare index of 0
                                                        // below used .innerHTML to insert below html element to teamsRow section
        teamsRow.innerHTML += `<div class="col-3">    
        <h4>Team ${i + 1}</h4>
        <ul class="list-group">

        </ul>
    </div>`
        
    }
}