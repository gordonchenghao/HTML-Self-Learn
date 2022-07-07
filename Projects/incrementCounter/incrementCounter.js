// const Tcounter = document.querySelector(".counter");
// let Ttotal=12000

// let counter = 0;
// const Interval=setInterval(() => {
//     counter+=Ttotal/2000
//   Tcounter.innerHTML = counter
// }, 1);

// setTimeout(()=>{
//     Tcounter.innerHTML = 12000;
//     clearInterval(Interval)},2000)

const counters = document.querySelectorAll(".counter");
const finalNum = [12000, 5000, 7500];
const stopTime = 1000;
counters.forEach((counter, idx) => {
  let num = 0;
  const interval = setInterval(() => {
    num += Math.ceil(finalNum[idx] / stopTime);
    counter.innerHTML = num;
  }, 1);

  setTimeout(() => {
    counter.innerHTML = finalNum[idx];
    clearInterval(interval);
  }, stopTime);
});
