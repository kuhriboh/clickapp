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

        pokemonList.forEach(function(pokemonList) {
  document.write(pokemonList.name + ' is a ' + pokemonList.types + ' type pokemon.' +'<br>');
});

  let pokemon = [
    {name: 'Garchmop', height:75.6 },
    {name: 'Celebi', height:24, },
    {name: 'Mew', height:16.8, },
    {name: 'Blaziken', height:75.6,},
    {name: 'Lugia', height:205.2, },
    {name: 'Dragonite', height:87.6 },
    {name: 'Piplup', height:16.8}
    ];

  for (let i=0; i<205.6; i++){
    if (pokemon[i].height >50 && pokemon[i].height >30){
      document.write(pokemon[i].name + pokemon[i].height + ' is huge! ' + '<br>');
    }else if (pokemon[i].height <30){
      document.write(pokemon[i].name + pokemon[i].height + ' is tiny! ' + '<br>');
    }
  }

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
