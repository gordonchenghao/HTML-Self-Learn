const jokeBtn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", config);
  console.log(res);
  const data = await res.json();

  joke.innerHTML = data.joke;
}
