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
const targetDate = new Date ('4/11/2023');

setInterval(() => {
	const currentDate = new Date();
	// console.log(convertMs(currentDate - targetDate))
}, 1000)



function convertMs(ms){
	const second = 1000;
	const minute = second * 60;
	const hour = minute * 60;
	const day = hour * 24;

	const days = Math.floor(ms / day);
	const hours = Math.floor((ms % day) / hour);
	const minutes = Math.floor(((ms % day) % hour) / minute);
	const secondes = Math.floor((((ms % day) % hour) % minute) / second);

	return {days, hours, minutes, secondes}
}
