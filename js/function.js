
const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('nav');


navButton.addEventListener('click', () => {
  navMenu.classList.toggle('visible');

  if (navMenu.classList.contains('visible')){
  document.getElementById("icono").classList.add('fa-plus');
  }else if (document.getElementById("icono").classList.contains('fa-plus')){
    document.getElementById("icono").classList.remove('fa-plus');
  }

});