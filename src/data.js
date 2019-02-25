//esto ya esta funcionando al 100
window.data = {

  //funcion de filtrar

  filterData: (dataPokes, types) => {
    const arrayFilter = dataPokes.filter(arrayPokemon => arrayPokemon.type.includes(types));

    return arrayFilter;

  },
  sortData: (result,  sortOrder) => {

    switch (sortOrder) {
      case 'desc':
      return result.sort((a, b) => (a.name > b.name)  && -1);
      case 'asc':
      return result.sort((a, b) => (a.name < b.name) && -1);

    
    }

  },
  computeStats: (arreglo) => {
    const result = arreglo.reduce((prevVal, actVal) => {
      return prevVal + actVal;
    });
    const calculation = (result / arreglo.length).toFixed(2);
    return calculation;
    
    
  }
 
};



