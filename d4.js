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
        teamsRow.innerHTML += `<div class="col-3 team">    
        <h4>Team ${i + 1}</h4>
        <ul class="list-group">

        </ul>
    </div>`
        
    }
}

function assign() {
    const person = teamQueue.children[0] // targeting first element in the teams queue/waiting list
    
    if (!person) return
    const teams = document.querySelectorAll(".team") // targetin the teams sections

    const randomIndex = Math.floor(Math.random() * teams.length) // creating a random index to randomly select a team

    teams[randomIndex].appendChild(person) // taking the teams section, applying the random index to it and using append child to add the 1st element/person
}

function addTeam() {

    const teamNumber = parseInt(teamsN.innerHTML) + 1 // takes the team number, turns it from a string to an integer so we can then add 1 when button pressed
    teamsN.innerHTML = teamNumber  // assigning the new +1 value to the teams number section
                                    // below adding html element to the teams row section
    
    teamsRow.innerHTML += `<div class="col-3 team"> 
    <h4>Team ${teamNumber}</h4>
    <ul class="list-group">

    </ul>
</div>`
}

function removeTeam() {
    const teamsList = document.querySelectorAll(".team") // targeting the teams list section
    const lastTeam = teamsList[teamsList.length - 1] // declaring lastTeam variable to remove 1 from the total amount of teams

    for (let child of lastTeam.querySelector("ul").children) {  // need to further study for loops to fully understand the inital part of this code
        teamsQueue.appendChild(child)
    }
    lastTeam.remove()
}