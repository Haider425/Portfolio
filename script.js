function toggleMenu(){
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

// Function to toggle theme
function toggleTheme() {
    const root = document.documentElement;
    const icons = document.querySelectorAll('.icons2');
    const arrows = document.querySelectorAll('.arrow');
    const isDarkMode = root.classList.toggle('dark');
    
    


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

  const toggle = document.getElementById('toggleDark');
  const body = document.querySelector('body');
  
  
  toggle.addEventListener('click', function(){
        toggleTheme();
      this.classList.toggle('bi-moon');
      if(this.classList.toggle('bi-brightness-high-fill')){
          body.style.transition = '1s';
          toggle.style.color = 'black';
          toggle.style.transition = '1s';

      }else{
          body.style.transition = '1s';
            toggle.style.color = 'white';
            toggle.style.transition = '1s';

      }
  });