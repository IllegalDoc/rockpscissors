function getComputerChoice() {
  const randomvalue = Math.floor(Math.random() * 3 + 1);
  if (randomvalue === 1) {
    return "scissors";
  } else if (randomvalue === 2) {
    return "rock";
  } else if (randomvalue === 3) {
    return "paper";
  }
}
function returnlistener() {
  if (scissors === 1) {
    console.log("scissors");
    return "scissors";
  } else if (rock === 1) {
    return "rock";
  } else if (paper === 1) {
    return "paper";
  }
}
const btn1 = document.querySelector("button.scissors");
const scissors = btn1.addEventListener("click", (e) => {
  return 1;
});
const btn2 = document.querySelector("button.rock");
const rock = btn2.addEventListener("click", (e) => {
  return 1;
});
const btn3 = document.querySelector("button.paper");
const paper = btn3.addEventListener("click", (e) => {
  return 1;
});

function playgame(getComputerChoice, returnlistener) {
  if (getComputerChoice() === "rock" && returnlistener() === "scissors") {
    return 1;
  } else if (getComputerChoice() === "rock" && returnlistener() === "paper") {
    return 0;
  } else if (
    getComputerChoice() === "paper" &&
    returnlistener() === "scissors"
  ) {
    return 0;
  } else if (getComputerChoice() === "paper" && returnlistener() === "rock") {
    return 1;
  } else if (
    getComputerChoice() === "scissors" &&
    returnlistener() === "paper"
  ) {
    return 1;
  } else if (
    getComputerChoice() === "scissors" &&
    returnlistener() === "rock"
  ) {
    return 0;
  } else if (getComputerChoice() === "rock" && returnlistener() === "rock") {
    return "draw";
  } else if (getComputerChoice() === "paper" && returnlistener() === "paper") {
    return "draw";
  } else if (
    getComputerChoice() === "scissors" &&
    returnlistener() === "scissors"
  ) {
    return "draw";
  }
}
returnlistener();
