function updateCountdown() {
  const now = new Date();
  const endOfYear = new Date(now.getFullYear() + 1, 0, 1);

  const timeLeft = endOfYear - now;
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("daysCountdown").innerText = days
    .toString()
    .padStart(2, "0");
  document.getElementById("hoursCountdown").innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutesCountdown").innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("secondsCountdown").innerText = seconds
    .toString()
    .padStart(2, "0");

  // Update digital clock for today's time and date
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const formattedDate = now.toLocaleDateString(undefined, dateOptions);
  const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
  document.getElementById(
    "digital-clock"
  ).innerText = `${formattedDate} ${formattedTime}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
