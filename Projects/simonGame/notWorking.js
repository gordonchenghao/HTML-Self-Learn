// const gamePattern = [];
// const userPattern = [];
// const buttonColours = ["red", "blue", "green", "yellow"];
// const audios = document.querySelectorAll("audio");
// let level = 0;
// let start =false

// $(window).keypress(function () {
//     if (!start) {
//         $("h1").text(`Level ${10}`);
//         start=true
//         nextSequence()
//     } 
// })

// let currentClick=0
// $(".btn").click(function () {
//   // pressed effect
//   $(this).addClass("pressed");
//   setTimeout(() => {
//     $(this).removeClass("pressed");
//   }, 100);

//   let colorId = $(this).attr("id");

//   currentClick++
//   if (checkAnswer(colorId)) {
    
//   } else {
//     // $("#wrongsound").trigger("play");
//     // $("body").addClass("game-over")
//     // $("h1").text("Game Over, Press Any Key to Restart");
//     // $(window).keypress(function () {
//     // $("body").removeClass("game-over")
//     // gamePattern=[]
//     // userPattern=[]
//     // level = 1;
//     // $("h1").text(`Level ${level}`);
//     // })
//   }
// });

// function stopSound() {
//   //   $("audio").each(function () {
//   //     $(this).trigger("pause");
//   //     console.log($(this))
//   //     $(this).attr("currentTime", "0");
//   //     $(this).currentTim
//   //     console.log(document.getElementById("redsound"))
//   //   });
//   audios.forEach((audio) => {
//     audio.pause();
//     audio.currentTime = 0;
//   });
// }

// function nextSequence() {
//   let randomNumber = Math.floor(Math.random() * 4),
//     randomChosenColour = buttonColours[randomNumber];

//   gamePattern.push(randomChosenColour);

//   //   Step up level
  
//   $("h1").text(`Level ${++level}`);

//   //flash animation
//   $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100).fadeIn(100)

//   $(`#${randomChosenColour}sound`).trigger("play")

  
// }

// function checkAnswer(colorId, currentClick) {
//   userPattern.push(colorId);
//   if (userPattern[]===gamePattern[]){
//       if(userPattern.length()=gamePattern.length()) {
//         let song = $(`#${colorId}sound`);
//         stopSound();
//         song.trigger("play");
//         setTimeout(()=>{nextSequence()}, 1000);
//       }
//   }
// }


// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function() {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   checkAnswer(userClickedPattern.length-1);
// });

// function checkAnswer(currentLevel) {

//     if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//       if (userClickedPattern.length === gamePattern.length){
//         setTimeout(function () {
//           nextSequence();
//         }, 1000);
//       }
//     } else {
//       playSound("wrong");
//       $("body").addClass("game-over");
//       $("#level-title").text("Game Over, Press Any Key to Restart");

//       setTimeout(function () {
//         $("body").removeClass("game-over");
//       }, 200);

//       startOver();
//     }
// }


// function nextSequence() {
//   userClickedPattern = [];
//   level++;
//   $("#level-title").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
//   playSound(randomChosenColour);
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function startOver() {
//   level = 0;
//   gamePattern = [];
//   started = false;
// }


