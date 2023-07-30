const $ = document.getElementById.bind(document)
const $$ = document.querySelector.bind(document)

var elementDays = $('days')
var elementHours = $('hours')
var elementMinutes = $('minutes')
var elementSeconds = $('seconds')
var elementTimeUp = $$('.time-up')

var deadline
var flag= true

elementTimeUp.onclick = function() {
    if(flag)
    {
      deadline = new Date()
      flag = false
    }
    deadline.setDate(deadline.getDate() +1)
    start(deadline)
}

function start(endtime) {
  function updateClock() {
    var timeRemaining = endtime - new Date();
    elementDays.textContent =  Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    elementHours.textContent = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
    elementMinutes.textContent = Math.floor((timeRemaining / (1000 * 60)) % 60)
    elementSeconds.textContent = Math.floor((timeRemaining / 1000) % 60)
    if (timeRemaining <= 0 ) {
        clearInterval(interval);
      } 
    }
    updateClock();
    var interval = setInterval(updateClock, 1000);
}


 
