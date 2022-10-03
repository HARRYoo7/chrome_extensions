let intervalTimer;

/**
	helper method used to show alarm alert
**/
function alertMessage(){
	alert("please drink water!!!");
}

/**
	helper method to start the timer.
**/
function startTimer(){
	if(!intervalTimer){
		console.log("water alarm started")
		intervalTimer = setInterval(alertMessage, 3600000);
	}
}

/**
	helper method to end the running timer.
**/
function endTimer(){
	console.log("water alarm ended")
	clearInterval(intervalTimer);
	intervalTimer = null;
}

/**
	defined init method that have click eventlisteners.
**/
function init(){
	document.getElementById("start").addEventListener("click", startTimer);
	document.getElementById("end").addEventListener("click", endTimer);
}

init();