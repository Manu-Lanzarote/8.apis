// Rick&Morty
// 1.	Haz una llamada a la API https://rickandmortyapi.com/api/character/ para que devuelva todos los personajes. Muestra en un div las fotos y los nombres.
let url = "https://rickandmortyapi.com/api/character/";
let personajes = "";

fetch(url)
  .then(function recogerRespuesta(respuesta) {
    return respuesta.json();
  })
  .then(function recogerDatos(datos) {
    console.log(datos.results.length);
    //En este caso nos encontramos con un array que contiene 20 objetos, por lo que lo recorreremos con un for.
    //Para ello creamos arriba, (fuera del fetch), la variable personajes y la igualamos a un string vacío para ir añadiéndole los datos que hemos solicitdo de los 20 personajes (objetos) que contiene el array

    for (let i = 0; i < datos.results.length; i++) {
      personajes += `
      <div>
      <img src="${datos.results[i].image}" alt="Personaje">
      <h2>${datos.results[i].name}</h2>
      </div>
      `;
    }
    document.getElementById("personajes").innerHTML = personajes;
  });
