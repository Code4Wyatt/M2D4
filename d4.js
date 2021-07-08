//const addNameEntry = function (name) {
 //   const ul = document.querySelectorAll("ul")[0];
//ul.innerHTML += `<li>${name}</li>`;
    
//};

 // addNameEntry("1");

 // const inputName = document.getElementById("input")[0];
 // document.onsubmit = addNameEntry;


  function addItem(list, inputField) {    // function with the list and input field as parameters
    var list = document.getElementById(list)[0];   // variable list declared to target the list, first list since will be adding more later
    var listItem = document.createElement("li");  // variable to create a new list item
    listItem.innerText = inputField.value; // used .innerText to add the value of the input field
    list.appendChild(listItem);  // used append child to add the listItem contents to the list
    return false; // stops submission of form so it doesnt clear and submit one entry each time - i think?
  }