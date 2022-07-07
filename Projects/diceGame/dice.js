const imag1 = document.querySelector(".img1");
const imag2 = document.querySelector(".img2");
const title = document.querySelector("h1");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let num1 = Math.ceil(Math.random() * 6),
    num2 = Math.ceil(Math.random() * 6);
  imag1.setAttribute("src", `images/dice${num1}.png`);
  imag2.setAttribute("src", `images/dice${num2}.png`);

  if (num1 > num2) {
    title.innerHTML = "Play1 wins!";
  } else if (num2 > num1) {
    title.innerHTML = "Play2 wins!";
  } else {
    title.innerHTML = "Draw";
  }
});
