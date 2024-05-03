// Function to toggle menu
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

// Function to toggle theme
function toggleTheme(isDarkMode) {
  const root = document.documentElement;
  const icons = document.querySelectorAll('.icons2');
  const arrows = document.querySelectorAll('.arrow');
  const downarrow = document.querySelector('.downarrow');
  root.classList.toggle('dark', isDarkMode);

  icons.forEach(icon => {
    if (isDarkMode) {
      icon.style.filter = 'invert(100%) sepia(0%) saturate(13%) hue-rotate(275deg) brightness(106%) contrast(106%)';
    } else {
      icon.style.filter = 'none';
    }
  });
  // Handle arrows
  arrows.forEach(arrow => {
    if (isDarkMode) {
      arrow.style.filter = 'invert(29%) sepia(62%) saturate(311%) hue-rotate(246deg) brightness(94%) contrast(94%)';
    } else {
      arrow.style.filter = 'invert(29%) sepia(62%) saturate(311%) hue-rotate(246deg) brightness(94%) contrast(94%)';
    }
  });

  if (isDarkMode) {
    downarrow.style.filter = 'invert(29%) sepia(62%) saturate(311%) hue-rotate(246deg) brightness(94%) contrast(94%)';
  } else {

    downarrow.style.filter = 'invert(29%) sepia(62%) saturate(311%) hue-rotate(246deg) brightness(94%) contrast(94%)';
  }
}

// Function to set initial theme based on localStorage
function setInitialTheme() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  toggleTheme(isDarkMode);

  const toggle = document.getElementById('toggleDark');
  const toggle2 = document.getElementById('toggleDark2');

  toggle.classList.toggle('bi-moon', isDarkMode);
  toggle.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  toggle.style.color = isDarkMode ? 'white' : 'black';

  toggle2.classList.toggle('bi-moon', isDarkMode);
  toggle2.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  toggle2.style.color = isDarkMode ? 'white' : 'black';

  window.scrollTo(0, 0);
}

// Event listener for theme toggle button
const toggle = document.getElementById('toggleDark');
const toggle2 = document.getElementById('toggleDark2');
const body = document.querySelector('body');
toggle.addEventListener('click', handleToggleClick);
toggle2.addEventListener('touchstart', handleToggleTouch);

function handleToggleClick() {
  const isDarkMode = !document.documentElement.classList.contains('dark');
  toggleTheme(isDarkMode);
  this.classList.toggle('bi-moon', isDarkMode);
  this.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
  body.style.transition = '1s';
  toggle.style.color = isDarkMode ? 'white' : 'black';
  toggle.style.transition = '1s';
}

function handleToggleTouch() {
  const isDarkMode = !document.documentElement.classList.contains('dark');
  toggleTheme(isDarkMode);
  this.classList.toggle('bi-moon', isDarkMode);
  this.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
  body.style.transition = '1s';
  toggle2.style.color = isDarkMode ? 'white' : 'black';
  toggle2.style.transition = '1s';
}

window.addEventListener("scroll", function() {
  var menu = document.querySelector(".menu-links");
  if (window.scrollY > 0) {
    menu.classList.add("hide");
  } else {
    menu.classList.remove("hide");
  }
});




// Call setInitialTheme when the page loads
window.addEventListener('load', setInitialTheme);