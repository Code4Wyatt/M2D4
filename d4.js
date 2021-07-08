
  function addItem(list, inputField) {    // function with the list and input field as parameters
    let list = document.getElementById(list);   // variable list declared to target the list, first list since will be adding more later
    let listItem = document.createElement("li");  // variable to create a new list item
    listItem.innerText = inputField.value; // used .innerText to add the value of the input field
    list.appendChild(listItem);  // used append child to add the listItem contents to the list
    return false; // stops submission of form so it doesnt clear and submit one entry each time - i think?
  }

  
  // How do I get the input box to clear after clicking submit? 