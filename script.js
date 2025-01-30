// Function to update the current time in UTC
function updateCurrentTimeUTC() {
    const currentTime = new Date().toISOString();
    document.getElementById('current-time').textContent = `Current UTC Time: ${currentTime}`;
  }
  
  // Update the time when the page loads
  updateCurrentTimeUTC();
  