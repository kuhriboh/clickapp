let pokemonRepository = (function() {
  let pokemonList = [
    // height = inches
    {name: 'Garchmop', height:75.6, types: ['Dragon','Ground'] },
    {name: 'Celebi', height:24, types: ['Psychic', 'Grass'] },
    {name: 'Mew', height:16.8, types:'Psychic' },
    {name: 'Blaziken', height:75.6, types: ['Fire','Fighting'] },
    {name: 'Lugia', height:205.2, types: ['Psychic', 'Flying'] },
    {name: 'Dragonite', height:87.6, types: ['Dragon', 'Flying'] },
    {name: 'Piplup', height:16.8, types: 'Water' }

  ]



    // Functions Add Item And Buttons to Pokedex
    function addListItem(pokemon){
      let list = document.querySelector('.pokemon-list');
      let listItem = document.createElement ('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('fancyButton');
      listItem.appendChild(button);
      list.appendChild(listItem);
      button.addEventListener('click', function(event){
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon){
      console.log(pokemon);
    }

    function add(pokemon){
      pokemonList.push(pokemon);
    }

    function getAll() {
      return pokemonList;
    }

    function removeLast() {
      pokemonList.pop();
    }

    return {
      add: add,
      getAll: getAll,
      removeLast:removeLast,
      addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
})
