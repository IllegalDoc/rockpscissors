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

function getHumanChoice() {
  try {
    let humanchoice = prompt("rock, paper or scissors ?");
    humanchoice = humanchoice.toLowerCase();
    if (
      humanchoice !== "rock" &&
      humanchoice !== "scissors" &&
      humanchoice !== "paper"
    ) {
      throw new Error("Invalid Input : Not amongst choices.");
    }
    return humanchoice;
  } catch (error) {
    console.error(error.message);
    alert("Enter a proper choice ! ");
  }
}

function playround(Computerchoice, humanchoice) {
  let cchoice = Computerchoice();
  let hchoice = humanchoice();
  if (hchoice === "rock" && cchoice === "scissors") {
    console.log("good job +1 !, rock crushes negus!");
    return 1;
  } else if (hchoice === "rock" && cchoice === "paper") {
    console.log("yo stupid, rock looses");
    return 0;
  } else if (hchoice === "paper" && cchoice === "scissors") {
    console.log("yo stupid ,paper looses");
    return 0;
  } else if (hchoice === "paper" && cchoice === "rock") {
    console.log("good job +1 !, paper win negus");
    return 1;
  } else if (hchoice === "scissors" && cchoice === "paper") {
    console.log("good job +1 !, scissors win boy");
    return 1;
  } else if (hchoice === "scissors" && cchoice === "paper") {
    console.log("yo stupid scissors loose negus");
    return 0;
  } else if (hchoice === "rock" && cchoice === "rock") {
    console.log("draw");
    return "draw";
  } else if (hchoice === "paper" && cchoice === "paper") {
    console.log("draw");

    return "draw";
  } else if (hchoice === "scissors" && cchoice === "scissors") {
    console.log("draw");
    return "draw";
  }
}

function playgame() {
  let round = 1;
  let humanscore = 0;
  let computerscore = 0;
  while (round < 6) {
    round += 1;
    let r = playround(getComputerChoice, getHumanChoice);
    if (r === 0) {
      computerscore += 1;
    } else if (r === 1) {
      humanscore += 1;
    }
  }
  if (humanscore > computerscore) {
    return "good job, you won g!";
  } else if (computerscore > humanscore) {
    return "you lost, yo stupid";
  }
}
console.log(playgame());
