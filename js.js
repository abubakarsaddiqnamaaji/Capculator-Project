
function updateTime() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes}`;

  document.getElementById("time-value").innerText = timeString;
}

setInterval(updateTime, 1000);
updateTime();