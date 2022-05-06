const addListener = (id, callback, eventType = "click") => {
  document.getElementById(id).addEventListener(eventType, callback);
};
function createTable() {
  resetGame();
  numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ];
  //shuffles numbers array randomly
  (randomNumbers = []), (i = numbers.length), (j = 0);
  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    randomNumbers.push(numbers[j]);
    numbers.splice(j, 1);
  }
  //return array as grid with no repeated numbers
  for (let i = 0; i < randomNumbers.length; i++) {
    const button = document.createElement("button"); /*create the div */
    button.classList.add("tile");
    button.setAttribute("id", "tile"); /* Add class to the div */
    const textNode = document.createTextNode(
      randomNumbers[i]
    ); /* create the text node */
    button.appendChild(textNode); /* Add text node to div */
    document
      .getElementById("container")
      .appendChild(
        button
      ); /* Finally append the div to the #container element */
    //   button.onclick = function () {
    //   this.style.backgroundColor = "green"
    //  };
    button.addEventListener("click", cardClickHandler);
  }
}

//resets game when start button is pressed
const resetGame = () => {
  let element = document.getElementById("container");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const correctArray = () => document.getElementsByClassName("correct").length;
addListener("start", createTable);

const cardClickHandler = () => {
  const buttons = document.querySelectorAll(".tile");
  buttons.forEach((button) =>
    button.addEventListener("click", (event) => {
      event.target.innerHTML;
    })
  );
  let buttonValue = parseInt(event.target.innerHTML);
  if (buttonValue == correctArray() + 1) {
    event.target.classList.toggle("correct");
    if (correctArray() == 25) {
      document.getElementById("you-win").innerHTML = "You Win!";
    }
  }
};
