// Set your launch date (YYYY, MM-1, DD, HH, MM, SS)
const launchDate = new Date("2025-12-31T00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = launchDate - now;

  if (timeLeft <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>We're Live! 🎉</h2>";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Update every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
