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
}

// Function to set initial theme based on localStorage
function setInitialTheme() {
  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  toggleTheme(isDarkMode);
  const toggle = document.getElementById('toggleDark');
  toggle.classList.toggle('bi-moon', isDarkMode);
  toggle.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  toggle.style.color = isDarkMode ? 'white' : 'black';
  window.scrollTo(0, 0);
}

// Event listener for theme toggle button
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
toggle.addEventListener('click', function() {
  const isDarkMode = !document.documentElement.classList.contains('dark');
  toggleTheme(isDarkMode);
  this.classList.toggle('bi-moon', isDarkMode);
  this.classList.toggle('bi-brightness-high-fill', !isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
  body.style.transition = '1s';
  toggle.style.color = isDarkMode ? 'white' : 'black';
  toggle.style.transition = '1s';
});

// Call setInitialTheme when the page loads
window.addEventListener('load', setInitialTheme);
