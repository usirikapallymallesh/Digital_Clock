const hour = document.getElementById("hour");
const minute = document.getElementById("minutes");
const second = document.getElementById("seconds");
const am_pm = document.getElementById("am-pm");

function updateTimer() {
  let date = new Date();
  let hours = date.getHours();
  let mins = date.getMinutes();
  let sec = date.getSeconds();

  let am = "AM";
  if (hours > 12) {
    hours = hours - 12;
    am = "PM";
  }
  hours = hours < 10 ? "0" + hours : hours;
  mins = mins < 10 ? "0" + `${mins}` : mins;
  sec = sec < 10 ? "0" + sec : sec;
  am_pm.innerText = `${am}`;
  hour.innerText = `${hours}`;
  minute.innerText = `${mins}`;
  second.innerText = `${sec}`;
  setTimeout(() => {
    updateTimer();
  }, 1000);
}
updateTimer();
