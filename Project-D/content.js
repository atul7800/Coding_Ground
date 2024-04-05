// Function to show a custom popup
function showCustomPopup() {
  // Replace this with your custom popup logic
  alert('Custom Popup triggered!');
}

// Find the notification button and attach a click event listener
document.addEventListener('DOMContentLoaded', function () {
  // Replace 'your-notification-button-selector' with the actual selector for the notification button
  const notificationButton = document.querySelector('.dropdown_notify');

  if (notificationButton) {
    notificationButton.addEventListener('click', function () {
      showCustomPopup();
    });
  }
});
