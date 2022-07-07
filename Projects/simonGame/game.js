const buttonColours = ["red", "blue", "green", "yellow"];
let userClickedPattern = [];
let gamePattern = [];
let start = true;
let level = 0;

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  // console.log(userClickedPattern)
  // console.log(gamePattern)
  checkAnswer();
});

$(window).keypress(function () {
  if (start) {
    $("h1").text("Level 0");
    nextSequence();
  }
});
function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  userClickedPattern = [];
  gamePattern.push(randomChosenColour);
  level++;
  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  $("h1").text(`Level ${level}`);
}

function playSound(colorId) {
  const sound = new Audio("sounds/" + colorId + ".mp3");
  sound.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  let idx = userClickedPattern.length - 1;
  if (userClickedPattern[idx] === gamePattern[idx]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = true;
}
