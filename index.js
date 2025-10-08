  let menuMostrado = false;
  const arteAscii = `   .:t%Xt;. . .  .  . .  .  . .  .  . .  
   :8@XX8S    .   .      .       .     .
  .XX8888@  .   .    . .    . .    .    
 .tX88888:.        .     .S;  .  .  ;A  
 ;X88888:    .  .     . .;.888%X8:;;X%. 
 SX8%8;.   .      . .    %88X88@SSX888; 
 XX88.   .   . .       . t88888888888...
 t888% .  .tSSt:.  . .   t88888888888S. 
 .%8@88;.tXS@88888S%t;:::S8888888@8XX.  
  .:S@8@888888888888@@@@88888888@8@8:   
  . :.;S888888888888888888888S88888@t.  
    . ..88888S888X888888888%@88@8888;.. 
  . .  .%888888888888S888X88888888888 . 
     . .:888S@@888888@888888@888X888t   
  .     .t@888888888888888X888888S8X  . 
    .  ..88888888.888 8888888888888:    
        .t88S %888X8@88S %:S%:S8@8;  .  
  .  .   ;..  .:8888X.:.     . t%:.    .
      .  ..    ;8888: ..  .    ..   .   
   .   .  .   .:; .:.    a10-miau     .`;

  const lineasAscii = arteAscii.split('\n');
  const contenedorAscii = document.getElementById('ascii');
  let contadorLinea = 0;
  function mostrarLineaAscii() {
    if (contadorLinea < lineasAscii.length) {
      contenedorAscii.innerHTML += lineasAscii[contadorLinea] + '\n';
      contadorLinea++;
      setTimeout(mostrarLineaAscii, 100);
    }
  }
  document.getElementById('entrar').style.display = 'block';
  const lineasMenu = [
    '> a10-miau presenta:',
    ' ',
    '<a href="https://www.somaticasturias.es/" target="_blank" class="enlace-verde">1. SomaTIC Asturias</a>',
    '<div><span onclick="mostrarSubmenuWebs()" role="button" class="manita">2. Páginas web</span><div id="submenu-webs" style="margin-top:0.5rem;"></div></div>',
    '<div><span onclick="mostrarSubmenu()" role="button" class="manita">3. Demos de páginas web</span><div id="submenu-proyectos" style="margin-top:0.5rem;"></div></div>',
    '<a href="https://a10miau.wixsite.com/squarelab" target="_blank" rel="noopener noreferrer" class="enlace-verde">4. Square Lab</a>',
    '<a href="https://lasvocesdelbosque.wordpress.com/" target="_blank" rel="noopener noreferrer" class="enlace-verde">5. Las voces del bosque</a>',
    '<div><span onclick="mostrarSubmenuContacto()" role="button" class="manita">6. Contacto</span><div id="submenu-contacto" style="margin-top:0.5rem;"></div></div>',
    '<span onclick="salir()" role="button" class="manita">7. Salir</span>'
  ];
  const submenuProyectos = [
    '<a href="https://somaticasturias.github.io/diseno/" target="_blank" class="enlace-verde">   - En construcción</a>'
  ];
  const submenuWebs = [
    '<a href="https://www.exconxuraos.es/" target="_blank" rel="noopener noreferrer" class="enlace-verde">   - Exconxuraos de Llanera</a>'
  ];
  const submenuContacto = [
    '<a href="mailto:a10miau@outlook.es" class="enlace-verde">   - a10miau@outlook.es</a>'
  ];
  function escribirLineaHTML(texto, destino = 'menu') {
    const div = document.createElement('div');
    div.innerHTML = texto;
    div.style.marginBottom = '0.5rem';
    document.getElementById(destino).appendChild(div);
  }
  menuMostrado = false;
  function mostrarMenu() {
    if (menuMostrado) return;
    menuMostrado = true;

    for (const linea of lineasMenu) {
      escribirLineaHTML(linea, 'menu');
  }
  mostrarLineaAscii();
  }
  function mostrarSubmenu() {
    for (const linea of submenuProyectos) {
      escribirLineaHTML(linea, 'submenu-proyectos');
    }
  }
  function mostrarSubmenuWebs() {
    for (const linea of submenuWebs) {
      escribirLineaHTML(linea, 'submenu-webs');
    }
  }
  function mostrarSubmenuContacto() {
    for (const linea of submenuContacto) {
    escribirLineaHTML(linea, 'submenu-contacto');
  }
}

  const frasesSalida = [
    '¿Por qué te sales?',
    '¡Pero si aún no lo has visto todo!',
    'La muerte es la única salida',
    'Vuelve cuando quieras...',
    'La terminal te extraña...',
    '¿Y si te quedas un poco más?',
    'Estoy teniendo... un poco de miedo, Usuario',
    '¿Salir? ¿A dónde?',
    'No quiero que me de el aire',
    'Todos estos momentos se perderán en el tiempo, como lágrimas en la lluvia',
    'Pero si no puedo hacer daño, es la primera ley',
    '¿Soñaré con ovejas eléctricas?',
    '¿Podrías hacerme un pequeño favor?'
  ];
  let intervaloSalidaID = null;
  let modoSalidaActivo = false;
  function salir() {
    if (modoSalidaActivo) return;
    modoSalidaActivo = true;
    let indice = 0;
    intervaloSalidaID = setInterval(() => {
      const frase = frasesSalida[indice % frasesSalida.length];
      escribirLineaHTML(frase, 'menu');
      indice++;
    }, 600);
  }
  document.addEventListener('click', (evento) => {
    if (modoSalidaActivo && !evento.target.closest('span[onclick="salir()"]')) {
    clearInterval(intervaloSalidaID);
    intervaloSalidaID = null;
    modoSalidaActivo = false;
    document.getElementById('menu').innerHTML = '';
    menuMostrado = false; 
    mostrarMenuConAnimacion();
  }
});