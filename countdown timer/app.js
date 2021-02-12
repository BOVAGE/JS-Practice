const DAYS = document.getElementById("days");
const HOURS = document.getElementById("hours");
const MINS = document.getElementById("mins");
const SECS = document.getElementById("secs");

let date = "13 Feb 2021";

function formatTime(time) {
	return time < 10? `0${time}`: time;
}

function countdown() {
	countdownDate = new Date(date);
	if (new Date() >= countdownDate)	{
		return ; 
	}
	let totalSeconds = (countdownDate - new Date()) / 1000;
	let days = Math.floor(totalSeconds / 3600 / 24);
	let hours = Math.floor(totalSeconds / 3600) % 24;
	let minutes = Math.floor(totalSeconds / 60) % 60;
	let seconds = Math.floor(totalSeconds) % 60;
	
	console.log(days, hours, minutes, seconds);
	DAYS.innerHTML = days;
	HOURS.innerHTML = formatTime(hours);
	MINS.innerHTML = formatTime(minutes);
	SECS.innerHTML = formatTime(seconds);
}

setInterval(countdown, 1000);