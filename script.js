/* Given the 'id' attribute of a form element, this will return the value entered by the user into that form element. */
function formValue(id) {
  // Get the form element by id 
  let formElement = document.getElementById(id);

  // If no form element found, return error string
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

  // If a form element is nothing but whitespace, replace input with the form element placeholder within brackets
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* Given the 'id' of an HTML element and a 'className', this will add that class name to the HTML element with the specified id. */
function removeClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.remove(className);
}

/* The code here will be executed each time the Generate button is clicked. */
function generate() {
  console.log("Generate button clicked.");

  // Retrieve form values
  let relative = formValue("relative");
  let adj1 = formValue("adjective-1");
  let adj2 = formValue("adjective-2");
  let adj3 = formValue("adjective-3");
  let famPer = formValue("fam-person");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let pet = formValue("pet-name");

  // Insert values into Mad Lib
  let madlib = `
    Dear ${relative},
    <br><br>
    I have been having a really ${adj1} time 
    at camp. The counselour is ${adj2} and 
    the food is ${adj3}. I met ${famPer} 
    and we quickly became ${noun}. Talk soon!
    <br><br>
    Your ${dessert},
    <br>
    ${pet}
  `;

  // Output Mad Lib to player
  document.getElementById("output").innerHTML = madlib;
  addClassToElement("container", "generated");
  removeClassToElement("title", "animate__tada");
  document.getElementById("button").innerHTML = "Back";
  document.getElementById("button").setAttribute("onclick", "restart()");
}

/**
 * Change to style.css
 * - Added border and border-radii to button and input tags
 * - Added text-align: center to input tags to match placeholders
 * - Added transition duration for button
 * - Added h1 animation using Animation.css library
 * - Changed HTML and added JS for a Back button after MadLib generation!!!
 */

/* The code here will be executed each time the Back button is clicked. */
function restart() {
  console.log("Back button clicked.");
  
  document.getElementById("output").innerHTML = "";
  removeClassToElement("container", "generated");
  addClassToElement("title", "animate__tada");
  document.getElementById("button").innerHTML = "Generate";
  document.getElementById("button").setAttribute("onclick", "generate()");
}