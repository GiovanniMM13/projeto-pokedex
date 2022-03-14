const  pokeListSelect = document.querySelectorAll('.pokemon')
const pokeCard = document.querySelectorAll('.card')

pokeListSelect.forEach(pokemon =>{
    pokemon.addEventListener('click',() => {
        const openedPokemonCard = document.querySelector('.open')
        openedPokemonCard.classList.remove('open')

        const selectedIdPokemon = pokemon.attributes.id.value

        const pokemonIdToBeopened = 'card-' + selectedIdPokemon
        const pokemonCardToOpen = document.getElementById(pokemonIdToBeopened)
        pokemonCardToOpen.classList.add('open')

        const openedPokemonList = document.querySelector('.active')
        openedPokemonList.classList.remove('active')

        const selectedPokemonList = document.getElementById(selectedIdPokemon)
        selectedPokemonList.classList.add('active')
    })
} )