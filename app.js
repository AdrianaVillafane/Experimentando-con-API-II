const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character/";

const user = fetch(URL_API);

user
  .then((respuesta) => respuesta.json())
  .then((datosRecibidos) => {
    const user = datosRecibidos.results["10"];

    console.log(user);

    $container.innerHTML = `
      <img src="${user.image}" alt="" />
     <h1>"${user.name}"</h1>
     <h2>"${user.gender}"</h2>
     <h2>"${user.species}"</h2>
    `;
  });
