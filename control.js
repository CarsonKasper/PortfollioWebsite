// Wait for the page to load before running this
window.addEventListener('DOMContentLoaded', () => {
    console.log('CRT Portfolio Ready');
  
    const menuItems = document.querySelectorAll('.channel-menu li');
    const screens = document.querySelectorAll('.channel-screen');
  
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        const channel = item.dataset.channel;
  
        // Hide all screens
        screens.forEach(screen => {
          screen.classList.remove('active');
        });
  
        // Show the selected screen
        document.querySelector(`.channel-${channel}`).classList.add('active');
      });
    });
  });
  