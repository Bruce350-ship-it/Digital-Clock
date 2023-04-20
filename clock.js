function updateTime() {
	let date = new Date();

	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	// Add leading zeros to minutes and seconds
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	if (is24HourFormat) {
		// 24-hour format
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('period').innerHTML = '';
	} else {
		// 12-hour format
		let period = hours >= 12 ? 'PM' : 'AM';
		hours = hours % 12;
		hours = hours ? hours : 12;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('period').innerHTML = period;
	}

	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
}

let is24HourFormat = false;
let toggleButton = document.getElementById('toggleButton');
toggleButton.addEventListener('click', function() {
	is24HourFormat = !is24HourFormat;
	if (is24HourFormat) {
		toggleButton.innerHTML = 'Switch to 12-Hour Format';
	} else {
		toggleButton.innerHTML = 'Switch to 24-Hour Format';
	}
});

// Update the clock every second
setInterval(updateTime, 1000);