function handleClick(event) {
  // console.log(event.target.innerText);
  console.log("button was clicked");
  // event.stopPropagation(); //stops the events from bubbling
  event.preventDefault(); //stops the browser from performing any default behavior
  return undefined;
}

let myButton = document.querySelector("button");
myButton.addEventListener("click", handleClick);
// myButton.removeEventListener("click", handleClick);
// myButton.onclick = handleClick; /*function() {
//   console.log("Click has been handled");
// };*/
// console.dir(myButton);
