// Define the target date and time
const targetDate = new Date('2023-05-31T00:00:00Z').getTime();

// Define the countdown function
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time remaining
  const timeRemaining = targetDate - now;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Print the countdown
  console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);

  // Check if the countdown is over
  if (timeRemaining < 0) {
    clearInterval(countdown);
    console.log('Countdown is over!');
  }
}, 1000);
