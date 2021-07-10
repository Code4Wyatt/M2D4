// Create function that adds a name to waiting list

  const inputName = document.querySelector("#input-name") // variable that targets the input name section with id #input-name
  const teamQueue = document.querySelector("#team-queue")
  
  const teamsN = document.querySelector("#teams-number")
  const teamsRow = document.querySelector("#teams-row")
          
  function addPerson(event) {
      event.preventDefault()
      
      const li = document.createElement("li")
      li.classList.add("list-group-item")
      li.classList.add("d-flex")
      li.classList.add("align-items-center")
      li.innerHTML = inputName.value
      
      const backBtn = document.createElement("button")
      
      backBtn.classList.add("btn")
      backBtn.classList.add("btn-outline-primary")
      backBtn.classList.add("btn-back")
      backBtn.classList.add("ml-auto")
      
      backBtn.addEventListener("click", function () {
          teamQueue.appendChild(this.parentNode)
      })
      
      backBtn.innerHTML = "⬅"
      
      li.appendChild(backBtn)
      
      teamQueue.appendChild(li)
  }
  
  window.onload = function () {
      console.log("loading")
      createTeams()
  }
  
  
  function createTeams() {
      for (let i = 0; i < teamsN.innerHTML; i++) {
          teamsRow.innerHTML += `
              <div class="col-6 col-sm-3 team">
                  <h4>Team ${i + 1}</h4>
                  <ul class="list-group">
                  </ul>
              </div>
          `
      }
  }
  
  function addTeam() {
      
      const teamNumber = parseInt(teamsN.innerHTML) + 1
      
      teamsN.innerHTML = teamNumber
      
      teamsRow.innerHTML += `
          <div class="col-6 col-sm-3 team">
              <h4>Team ${teamNumber}</h4>
              <ul class="list-group">
              </ul>
          </div>
      `
  }
  
  function removeTeam() {
      
      const newTeamsN = parseInt(teamsN.innerHTML) - 1
      
      if (newTeamsN < 2) return
      
      
      teamsN.innerHTML = newTeamsN
      
      const teamsList = document.querySelectorAll(".team")
      const lastTeam = teamsList[teamsList.length - 1]
      
      const list = lastTeam.querySelector("ul")
                      
      while ( list.children.length !== 0 ) {
          teamQueue.appendChild(list.children[0])
      }
      
      lastTeam.remove()
      

  }
  
  function assign() {
      const person = teamQueue.children[0]
      
      if(!person) return
      
      const teams = document.querySelectorAll(".team > ul")
      const randomIndex = Math.floor(Math.random() * teams.length)
      
      teams[randomIndex].appendChild(person)
      
      console.log( { person, randomIndex })
      
  }
  
  function reset() {
      teamQueue.innerHTML = ""
      
      teamsRow.innerHTML = ""
      
      inputName.value = ""
      
      teamsN.innerHTML = 2
      
      createTeams()
  }
  