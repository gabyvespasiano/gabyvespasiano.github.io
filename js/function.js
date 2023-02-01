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

const enlaces ={
  "html5-fundamentos-web": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/61068",
  "introduccion-al-paradigma-de-objetos": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/58100",
  "javascript-desde-cero": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/58610",
  "python-programming": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/56828",
  "software-tester-QA": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/55903"
}
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
  button.addEventListener("click", e => {
    const buttonClass = e.target.className;
    let clase = buttonClass.replace("btncertificados ","")
    window.open(enlaces[clase])

  });
});