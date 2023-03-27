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
//aqui cargamos todos los enlaces de los certificados
// const enlaces ={
//   "html5-fundamentos-web": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/61068",
//   "introduccion-al-paradigma-de-objetos": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/58100",
//   "javascript-desde-cero": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/58610",
//   "python-programming": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/56828",
//   "software-tester-QA": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/55903",
//   "Protocolo-HTTPS": "https://api.educacionit.com/pdf/certificados/gabriel-vespasiano-767377/30344",
//   "primeros-pasos-del-desarrollo-frontend": "https://gabyvespa.ar/imagenes/certificaciones/certificate-download.pdf",
//   "arg-programa": "https://seprogramar.inti.gob.ar/inti/certificates/verify/NeN0HBk_Sc2cooW3"

// }
// const buttons = document.querySelectorAll("button");

// buttons.forEach(button => {
//   button.addEventListener("click", e => {
//     const buttonClass = e.target.className;
//     let clase = buttonClass.replace("btncertificados ","")
//     if (enlaces[clase] != undefined){
//       window.open(enlaces[clase])
//     }

//   });
// });

// Obtiene todos los enlaces del navbar
const navLinks = document.querySelectorAll('.navr a');

// Agrega un listener de clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href'); // Obtiene el valor del atributo href
    if (href.includes("#")){
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    const target = document.querySelector(href); // Obtiene el elemento de destino

    if (target) {
      // Calcula la posición actual del scroll y la posición del destino
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetTop = target.getBoundingClientRect().top + scrollTop;

      // Realiza el desplazamiento
      window.scrollTo({
        top: targetTop - 60, // Ajusta este valor según lo necesites
        behavior: 'smooth' // Hace que el desplazamiento sea suave
      });
    }
  }});
});


// Agrega un listener de scroll a la ventana
window.addEventListener('scroll', () => {
  // Obtiene la posición actual del scroll
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  // Recorre todos los enlaces del navbar
  navLinks.forEach(link => {
    const href = link.getAttribute('href'); // Obtiene el valor del atributo href
    if (href.includes("#")){
    const target = document.querySelector(href); // Obtiene el elemento de destino correspondiente

    if (target) {
      // Calcula la posición del destino y el tamaño de la ventana
      const targetTop = target.getBoundingClientRect().top + currentScroll;
      const windowHeight = window.innerHeight;

      // Agrega o elimina la clase 'active' según corresponda
      if (currentScroll >= targetTop - windowHeight / 2 && currentScroll < targetTop + target.offsetHeight - windowHeight / 2) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  }});
});
fetch('/imagenes/proyectos/proyectos.json')
  .then(response => response.json())
  .then(proyectos => {
    const proyectosHTML = proyectos.map(proyecto => `
    <article class="card">
              <img src="${proyecto.imagen}" width="300px" alt="${proyecto.nombre}" />
              
              <article class="content">
                <h3>${proyecto.nombre}</h3>
                <section>  
                  <a href="${proyecto.test}" rel="nofollow" target="_blank">Probar</a>
                  <a href="${proyecto.github}" rel="nofollow" target="_blank">GitHub</a>
                </section>
          
                <p>
                ${proyecto.descripcion}
                </p>
                <p class="low">stack utilizado: ${proyecto.stack}</p>
              </article>
    </article>
    `).join('');
    document.querySelector('#proy-cards').innerHTML = proyectosHTML;
  });

fetch('/imagenes/certificaciones/certificados.json')
  .then(response => response.json())
  .then(certificados => {
    const proyectosHTML = certificados.map(certificado => `
    <article class="card cert">
      <img src="${certificado.imagen}" width="300" alt="previsualizacion del certificado" />
      <h3>${certificado.nombre}</h3>
      <a href="${certificado.enlace}" target="_blank">
        <button class="btncertificados">Ver certificado</button>
      </a>
    </article>
    `).join('');
    document.querySelector('#cert-cards').innerHTML = proyectosHTML;
  });