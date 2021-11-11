let pokemonRepository = (function() {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    //modal
  let pokedexpokemonList = document.querySelector('.pokemon-list');
  let pokedexScreen = document.querySelector('.pokedex-screen');
  let modalContainer = document.querySelector('#modal-container');
  let modal = document.querySelector('.modal');

  let modalClose = document.createElement('button');
    modalClose.classList.add('modal-close');
  let pokeName = document.createElement('h1');
    pokeName.classList.add('Pokename');
  let pokeHeight = document.createElement('p');
    pokeHeight.classList.add('Pokeheight');
  let imageContainer = document.createElement('div');
    imageContainer.classList.add('img-container');
  let pokeImage = document.createElement('img');
    pokeImage.classList.add('PokeImage');
  let pokeType = document.createElement('p');
    pokeType.classList.add('Poketype');

    // Functions Add Item And Buttons to Pokedex

    function addListItem(pokemon){
      let list = document.querySelector('.pokemon-list');
      let listItem = document.createElement ('li');
      let button = document.createElement('button');
      button.innerText = pokemon.name.toUpperCase();
      button.classList.add('fancyButton');
      listItem.classList.add('group-list-item');
      button.setAttribute('data-toggle','modal')
      button.setAttribute('data-target','#targetModal')
      listItem.appendChild(button)
      list.appendChild(listItem)
      button.addEventListener('click', function(pokemont){
        showDetails(pokemon);
      });
    }

    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
      showModal(pokemon);
      console.log(pokemon);
      });
    }

    function loadList() {
        return fetch(apiUrl)
        .then(function (response) {
        return response.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
            };
              add(pokemon);
              });
        }).catch(function (e) {
          console.error(e);
        })
      };

      function loadDetails(item) {
        let url = item.detailsUrl;
     return fetch(url).then(function (response) {
       return response.json();
     }).then(function (details) {
       item.imageUrl = details.sprites.front_default,
       item.height = details.height,
       item.types = details.types
       item.weight = details.weight;
     }).catch(function (e) {
       console.error(e);
     });
   }

      function showModal(pokemon) {
        let modalTitle = document.querySelector('.modal-title');
        let modalBody = document.querySelector('.modal-body');
        let theMap = pokemon.types;
        let map = theMap.map(function(x){
          return x.type.name;
        });

        modalTitle.innerHTML = '';
        modalBody.innerHTML = '';

      let title = document.createElement('h5');
       title.innerHTML = pokemon.name;

       let pokeHeight = document.createElement('p');
       pokeHeight.innerHTML = 'Height: ' + pokemon.height;

       let pokeType = document.createElement('p');
       pokeType.innerHTML = 'Type: ' + map;

       let pokeWeight = document.createElement('p');
       pokeWeight.innerHTML = 'Weight: ' + pokemon.weight;

       let pokeImage = document.createElement('img');
       pokeImage.src = pokemon.imageUrl;

      modalTitle.append(title);
      modalBody.append(pokeImage);
      modalBody.append(pokeHeight);
      modalBody.append(pokeWeight);
      modalBody.append(pokeType);
      }

      function hideModal() {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.classList.remove('is-visible');
      }

      modalClose.addEventListener('click' , hideModal);

      window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
          hideModal();
        }
      });

      modalContainer.addEventListener('click', (e) => {
        // Since this is also triggered when clicking INSIDE the modal
        // We only want to close if the user clicks directly on the overlay
        let target = e.target;
        if (target === modalContainer) {
          hideModal();
        }
      });

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
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails,
      showDetails: showDetails,
      showModal: showModal,
      hideModal: hideModal
    };
})();

pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
  });
});
