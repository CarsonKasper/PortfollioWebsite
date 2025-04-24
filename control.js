const channelButton = document.querySelector('.channel-button');
const channelMenu = document.querySelector('.channel-menu');
const menuItems = document.querySelectorAll('.channel-menu li');
const screens = document.querySelectorAll('.channel-screen');

// Toggle the menu on button press
channelButton.addEventListener('click', () => {
  channelMenu.classList.toggle('hidden');
});

// Switch screens from menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const channel = item.dataset.channel;
    screens.forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.channel-${channel}`).classList.add('active');
    channelMenu.classList.add('hidden'); // hide menu again
  });
});
