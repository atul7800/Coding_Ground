// Function to show a custom popup
function showCustomPopup() {
    // Replace this with your custom popup logic
    alert('Custom Popup triggered!');
  }
  
  // Find the notification button and attach a click event listener
  document.addEventListener('DOMContentLoaded', function () {
    // Replace 'your-notification-button-selector' with the actual selector for the notification button
    const notificationButton = document.querySelector('.notBtn');
  
    if (notificationButton) {
      // Trigger the custom popup when the notification button is clicked
      notificationButton.addEventListener('click', function () {
        showCustomPopup();
      });
      
      // Optionally, you can trigger the popup immediately when the page loads
      // Uncomment the line below if you want to do that
      // showCustomPopup();
    }
  });
  