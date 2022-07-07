const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const digital = document.querySelector(".digital")
const digHour = document.querySelector(".digHour")
const digMin = document.querySelector(".digMin")
setTime();
setInterval(setTime, 1000);
function setTime() {
  let time = new Date();
  let secRatio = time.getSeconds() / 60;
  let minRatio = (time.getMinutes() + secRatio) / 60;
  let hourRatio = (time.getHours() + minRatio) / 12;

  hour.style.setProperty("--rotation", hourRatio * 360);
  min.style.setProperty("--rotation", minRatio * 360);
  sec.style.setProperty("--rotation", secRatio * 360);

  digHour.innerHTML=String("0"+time.getHours()).slice(-2)
  digMin.innerHTML=String("0"+time.getMinutes()).slice(-2)
  digital.classList.toggle("dim")
}
