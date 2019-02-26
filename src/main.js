//const dataPokes = window.POKEMON.pokemon;
let dataPokes = "";
let google = window.google;

fetch('./data/pokemon/pokemon.json')
  .then(tryPoke => tryPoke.json())
  .then(pokes => {
    dataPokes = pokes.pokemon;


  })
google.load('visualization', '1.0', {
  'packages': ['corechart']
});
const draw = () => {
  const data = new google.visualization.DataTable();
  data.addColumn('string', 'Edad');
  data.addColumn('number', 'Porcentaje %');
  data.addRows(
    [
      ['13 a 17 años', 22],
      ['18 a 29 años', 46],
      ['30 a 50 años', 25],
      ['Más de 50 años ', 6]
    ]
  );

  const option = {
    'title': '¿Quién Juega mas ?',

    'width': 900,
    'height': 400
  };
  const grafica = new google.visualization.PieChart(document.getElementById('charts'));
  grafica.draw(data, option);
}
google.setOnLoadCallback(draw);



//En esta seccion estoy trayendo los elemneetos del html para que los botones de hagan su funcion/

const buttonTypes = Array.from(document.getElementsByClassName("typesPokemon"));
let result;
const obtenerTipo = (arregloBotones) => {
  arregloBotones.map((tipoPokemon) => {
    tipoPokemon.addEventListener("click", (event) => {
      const getTypePokemon = event.target.id;
      const arregloFiltrado = window.data.filterData(dataPokes, getTypePokemon);
      imprimir(arregloFiltrado);
      result = arregloFiltrado;
      return arregloFiltrado;
    })
  });
}
obtenerTipo(buttonTypes);
const imprimir = (obtenerTipo) => {

  const pokemons = document.getElementById("paint");
  pokemons.innerHTML = "";
  obtenerTipo.map((dataPokes) => {
    pokemons.innerHTML += `<div class="imagesPokemon"><figure>

<img src="${dataPokes.img}"></figure>

<div class="texto-pokemon"><p>Nombre: ${ dataPokes.name}</p>
<p> Candy: ${ dataPokes.candy}</p>
<p> Altura: ${ dataPokes.height}</p>
<p> Peso: ${ dataPokes.weight}</p>
<p> Avg Spawns: ${ dataPokes.avg_spawns}</p>
<p> Debilidades: </p>
<p>${ dataPokes.weaknesses}</p></div>

</div>`
  })

};

/*ordenando pokemon*/

const sortingRadio = document.getElementsByName("order");
const paintOrder = document.getElementById("paint");
const arrayButtonRadio = Array.from(sortingRadio)
const getOrderPokemon = (arrayButtonRadio) => {

  arrayButtonRadio.map(radio => {
    radio.addEventListener("click", () => {

      if (radio.checked === true) {
        let idRadio = radio.id;
        const cachando = window.data.sortData(result, idRadio);
        paintOrder.innerHTML = "";
        imprimir(cachando);
      }
    });

  });


  //creando slash//
  setTimeout(function () {
    document.getElementById("splash").className = "hide";
  }, 3000);


}

getOrderPokemon(arrayButtonRadio);

//calculo

const info = document.getElementById('info');
let statsPok = [];
const arreglo = [];

info.addEventListener("click", () => {
  result.forEach(element => {


    arreglo.push(element.avg_spawns);
    statsPok = window.data.computeStats(arreglo);



  });
  alert("Sabías que... en promedio este tipo de pokemons tienden a aparecer cada : " + statsPok);
})
