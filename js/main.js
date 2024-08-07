const categories = document.getElementById("categories");
const text = document.querySelector(".text");
const button = document.querySelector(".srt");

button.addEventListener("click", () => {
    const date = new Date ();
    const monthUkr = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"];
    const dayOfWick = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четверг", "П'ятниця", "Субота"]
  console.log(monthUkr[date.getMonth()])
    text.textContent = `Місяць: ${monthUkr[date.getMonth()]}, Число: ${date.getDate()}, День неділі: ${dayOfWick[date.getDay()]}`
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////
const box = document.querySelector(".box");
const counter = document.querySelector(".counter");
let seconds = 10;
setTimeout(() => {
  box.style.display = "block";
  const interval = setInterval(() => {
    seconds -= 1;
    counter.textContent = seconds;
    if (!seconds) {
      counter.textContent = "х";
      counter.addEventListener("click", oneClick);
      clearInterval(interval);
    }
  }, 1000);
}, 2000);

function oneClick() {
  box.style.display = "";
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateClock() {
	const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const secondes = document.querySelector(".secondes");
  const time = new Date();
  hours.textContent = time.getHours().toString().padStart(2, '0');
  minutes.textContent = time.getMinutes().toString().padStart(2, '0');
  secondes.textContent = time.getSeconds().toString().padStart(2, '0');
}

setInterval(updateClock, 1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateClock1() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
  
	const secondHand = document.getElementById('second');
	const minuteHand = document.getElementById('minute');
	const hourHand = document.getElementById('hour');
  
	const secondDeg = ((seconds / 60) * 360) + 90;
	const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
	const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
  
	secondHand.style.transform = `rotate(${secondDeg}deg)`;
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
	hourHand.style.transform = `rotate(${hourDeg}deg)`;
  }
  
  setInterval(updateClock1, 1000);
  updateClock1();
/////////////////////////////////////////////////////////////////////////////////////////////////////////