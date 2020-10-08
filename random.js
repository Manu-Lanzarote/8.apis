// 1- Usa la api https://randomuser.me/ para generar un usuario aleatorio. Crea un div en el que aparezca la foto, el nombre, el email, la dirección (street name, street number, city, state, country, postcode)
let url = "https://randomuser.me/api/";

fetch(url)
  .then(function recogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function recogerDatos(datos) {
    //console.log(datos.results[0].picture.medium);
    //En este caso tenemos un array con un único objeto que contiene otros objetos por lo que no es necesario recorrerlo con un for ya que su longitud es 1.
    // Y como el array solo tiene una longitud de 1, el índice es [0]

    //Para obtener los datos que me pide el ejercicio solo necesito crar una variable dentro del fetch a la que igualaré directamente a los datos que necesito ya que, a diferencia del ejercicio de Rick, no tengo que ir añadiéndole más objetos, (fueron 20 concretamente).
    // Recordar que el índice de un array de un solo elemento es [0]
    let randomUser = `
    <div>
    <img src="${datos.results[0].picture.medium}" alt="Imagen">
    <h3>${datos.results[0].name.title} ${datos.results[0].name.first} ${datos.results[0].name.last}</h3>
    <p>${datos.results[0].location.street.number} ${datos.results[0].location.street.name}</p>
    <p>${datos.results[0].location.city}</p>
    <p>${datos.results[0].location.state}</p>
    <p>${datos.results[0].location.country}</p>
    <p>${datos.results[0].location.postcode}</p>
    </div>
    `;
    document.getElementById("random").innerHTML = randomUser;
  });
