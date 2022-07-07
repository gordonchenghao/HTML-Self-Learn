const buttons = document.querySelectorAll(".drum");
const sounds = document.querySelectorAll("audio");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    pressAnimation(buttons[idx]);
    sounds[idx].play();
  });
});

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      pressAnimation(buttons[0]);
      sounds[0].play();
      break;
    case "a":
      pressAnimation(buttons[1]);
      sounds[1].play();
      break;
    case "s":
      pressAnimation(buttons[2]);
      sounds[2].play();
      break;
    case "d":
      pressAnimation(buttons[3]);
      sounds[3].play();
      break;
    case "j":
      pressAnimation(buttons[4]);
      sounds[4].play();
      break;
    case "k":
      pressAnimation(buttons[5]);
      sounds[5].play();
      break;
    case "l":
      pressAnimation(buttons[6]);
      sounds[6].play();
      break;
    default:
      return;
  }
});

function pressAnimation(pressedButtton) {
  pressedButtton.classList.add("press");
  setTimeout(() => {
    pressedButtton.classList.remove("press");
  }, 100);
}
