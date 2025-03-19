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

let round = 1;
let computerscore = 0;
let humanscore = 0;

function playround(Computerchoice, humanchoice) {
  let cchoice = Computerchoice();
  let hchoice = humanchoice;

  if (hchoice === "rock" && cchoice === "scissors") {
    return 1;
  } else if (hchoice === "rock" && cchoice === "paper") {
    return 0;
  } else if (hchoice === "paper" && cchoice === "scissors") {
    return 0;
  } else if (hchoice === "paper" && cchoice === "rock") {
    return 1;
  } else if (hchoice === "scissors" && cchoice === "paper") {
    return 1;
  } else if (hchoice === "scissors" && cchoice === "rock") {
    return 0;
  } else if (hchoice === "rock" && cchoice === "rock") {
    return "draw";
  } else if (hchoice === "paper" && cchoice === "paper") {
    return "draw";
  } else if (hchoice === "scissors" && cchoice === "scissors") {
    return "draw";
  }
}
const btn1 = document.querySelector("button.scissors");
const div = document.querySelector("div.result");
const newgamebutton = document.querySelector("button.new");
const newgamediv = document.querySelector("div.new");
newgamediv.style.display = "none";

function newgame() {
  div.textContent = "Another one!";
  round = 1;
  computerscore = 0;
  humanscore = 0;
  newgamediv.style.display = "none";
}
const divstartbutton = document.querySelector("div.start");
const startbutton = document.querySelector("button.start");
startbutton.addEventListener("click", (e) => {
  divstartbutton.style.display = "none";

  newgamebutton.addEventListener("click", newgame);

  const choicebuttons = document.querySelectorAll("button.choice");
  console.log(choicebuttons);
  choicebuttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = playround(getComputerChoice, button.textContent);
      if (
        round < 5 &&
        humanscore - computerscore != 2 &&
        computerscore - humanscore != 2
      ) {
        if (value === 1) {
          div.textContent = " round" + round + "  : You Win 😀";
          humanscore += 1;
          round += 1;
        } else if (value === 0) {
          div.textContent = " round" + round + "  : You Loose 😓";
          computerscore += 1;
          round += 1;
        } else if (value === "draw") {
          div.textContent = " round" + round + " : Draw 🤞";
          computerscore += 1;
          humanscore += 1;
          round += 1;
        }
      } else {
        if (humanscore > computerscore) {
          alert("You Won!😀😀😀");
        } else if (computerscore > humanscore) {
          alert("You Lost the game 😓😓😓");
        } else alert("Draw  🤞🤞🤞");
        newgamediv.style.display = "flex";
      }
    });
  });
});
