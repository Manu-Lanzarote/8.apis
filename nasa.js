// Fotos de astronomia
// 1- Crea una página con tres cajas de texto en la que se le pida al usuario un año, un mes y un día. Al apretar un botón, se le hace una petición a la API de la NASA de APOD, y muestra la fecha, el título, la imágen y la descripción en la página.
// Para usar la API de la NASA se necesita una clave de verificación.
let dia = "";
let mes = "";
let anyo = "";

let url = `https://api.nasa.gov/planetary/apod?api_key=gk1jxfQTterUuIrzddIX6VdTHVt4o4A8xfBRgsPf&date=${2019}-${01}-${28}`;

function verFecha() {
  dia = parseInt(document.getElementById("dia").value);
  mes = parseInt(document.getElementById("mes").value);
  anyo = parseInt(document.getElementById("anyo").value);
  console.log(dia, mes, anyo);
}

fetch(url)
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
