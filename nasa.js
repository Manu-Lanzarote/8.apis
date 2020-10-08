// Fotos de astronomia
// 1- Crea una página con tres cajas de texto en la que se le pida al usuario un año, un mes y un día. Al apretar un botón, se le hace una petición a la API de la NASA de APOD, y muestra la fecha, el título, la imágen y la descripción en la página.
// Para usar la API de la NASA se necesita una clave de verificación.

// HTML
// <body>
// <!-- Enviar fecha -->
// <input type="text" name="dia" placeholder="dd" id="dia" />
// <input type="text" name="mes" placeholder="mm" id="mes" />
// <input type="text" name="anyo" placeholder="anyo" id="anyo" />
// <button onclick="verFecha()">Mostrar evento</button>

// <!-- Mostrar resultado -->
// <div id="mostrar"></div>
// <script src="./nasa.js"></script>
// </body>

let url = `https://api.nasa.gov/planetary/apod?api_key=gk1jxfQTterUuIrzddIX6VdTHVt4o4A8xfBRgsPf&date=`;

function sacarFecha() {
  let fecha = `${document.getElementById("anyo").value}-${
    document.getElementById("mes").value
  }-${document.getElementById("dia").value}`;
  return fecha;
}

function verFecha() {
  let resulFecha = sacarFecha();
  fetch(url + resulFecha)
    .then(function recogerRespuesta(respuesta) {
      return respuesta.json();
    })
    .then(function recogerDatos(datos) {
      // console.log(datos);

      let mostrarEvento = `
    <div>
    <p>${datos.date}</p>
    <h3>${datos.title}</h3>
    <img src="${datos.url}" alt="">
    <p>${datos.explanation}</p>
    </div>
    `;
      document.getElementById("mostrar").innerHTML = mostrarEvento;
    });
}
