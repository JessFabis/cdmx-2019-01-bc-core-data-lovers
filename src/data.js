// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

//esto a esta funcionando al 100
window.data={ 

//funcion de filtrar

filterData:(dataPokemon,types) =>{
const arrayPokemon= dataPokemon ;
  const arrayFilter = arrayPokemon.filter(arrayPokemon => arrayPokemon.type.includes(types));
  return arrayFilter;
}

};

//funcion de ordenar
sortData:(dataPokemon,sortBy,sortOrder)=>{
  let orderDta = [];
  switch (sortBy){
    case"name":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.name>b.name)?1:-1);
    }
    else if (sortOrder === "desc"){
      console.log(sortBy);
        orderDta= dataPokemon.sort((a,b) => (a.name>b.name)?-1:1);
    }
    break;

    case "width":
    if (sortOrder === "asc"){
      orderDta=dataPokemon.sort((a,b) => (a.width>b.width)?1:-1);
    }else if (sortOrder === "desc"){
        orderDta= dataPokemon.sort((a,b) => (a.width>b.width)?-1:1);
    }break

  
  }
  sortData(dataPokemon,sortBy,sortOrder);
};


 /*En esta seccion estoy extrayendo datos especificos de la data*/
  
 

  
  imprimir : (imagen, nombre2, id, candy, altura, peso, debilidades) => {
  
  const pokes = document.getElementById("pintar");
 
   let nombrePokemon = `<p> <img src="${imagen}">
   <br>Nombre:${nombre2}</br>
   <br> Su Id es :${id}</br>
   <br> Su candy es :${candy}</br>
   <br> Su altura es :${altura}</br>
   <br> Su peso es :${peso}</br>
   <br> debilidades :${debilidades}</br>
   </p>`;
   pokes.insertAdjacentHTML("beforeend",nombrePokemon);
   
 };
 dataPokemon.forEach(elemento => {
   let imagen = elemento.img;
   let nombre2 = elemento.name;
   let id = elemento.id;
   let candy = elemento.candy;
   let altura = elemento.height;
   let peso =elemento.weight;
   let debilidades =elemento.weaknesses;
   imprimir(imagen ,nombre2,id,candy,altura,peso,debilidades);
   alert(imprimir);
 });    
 
 













  











/*funcion de calcular*/
/*computeStats:(data) =>{
  const todo= array ;
}*/


  /*En esta Seccion estoy trabajando en la seccion de busqueda*/
  /*
  
  function searching() {
    document.getElementById("result").innerHTML = '';
    let filtro = [
      "Dragonair",
      "pikachu",
      "mew",
      "mewtwo",
      "moltres"
    ];
    let elemento = document.getElementById("busqueda").value;
    let proceso = elemento.length;
    for (indice in filtro) {
      let name = filtro[indice];
      let str = name.substring(0, proceso);
      if (elemento.length <= name.length && elemento.length != 0 && name.length != 0) {
        if (elemento.toLowerCase() == str.toLowerCase()) {
          let node = document.createElement("LI");
          let textnode = document.createTextNode(filtro[indice]);
          node.appendChild(textnode);
          document.getElementById("result").appendChild(node);
        } else {*/
          /*alert('no')*/
       /* }*/
        




  
  
  /*
  
  let mostrar = (imagen, nombre2, id, candy, altura, peso, debilidades) => {
   
      let nombrePokemon = `<p> <img src="${imagen}">
      <br>Nombre:${nombre2}</br>
      <br> Su Id es :${id}</br>
      <br> Su candy es :${candy}</br>
      <br> Su altura es :${altura}</br>
      <br> Su peso es :${peso}</br>
      <br> debilidades :${debilidades}</br>
      </p>`;
    }
  datapokes.forEach(elemento => {
    let imagen = elemento.img;
    let nombre2 = elemento.name;
    let id = elemento.id;
    let candy = elemento.candy;
    let altura = elemento.height;
    let peso =elemento.weight;
    let debilidades =elemento.weaknesses;
    mostrar(imagen ,nombre2,id,candy,altura,peso,debilidades);
   
    
  });*/
 
  