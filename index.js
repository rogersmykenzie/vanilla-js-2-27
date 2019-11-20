const myButton = document.querySelector("button");
// document.getElementsByClassName("button")
let userPassword = "supersecretpassword";

myButton.addEventListener("click", handleButtonClick);
//event handlers
function handleButtonClick() {
  //get the value of the input field
  const inputField = document.querySelector("input");
  const userText = inputField.value;
  // let { value } = inputField;
  // console.dir(inputField.value);
  //grab the ordered list
  const ol = document.querySelector("ol");
  //create a new list item
  //add the input value to the list item
  // const newListItem = "<li>" + userText + "</li>";
  //add the new list item to the ordered list
  // ol.innerHTML += newListItem;
  //GOOD WAY
  let newListItem = document.createElement("li");
  newListItem.innerText = userText;
  ol.append(newListItem);
}
