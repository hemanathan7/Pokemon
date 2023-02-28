const pokemons = document.getElementById('pokemons')

const createCards = (pokemon) => {
    const div = document.createElement('div')
    div.classList.add('card')

    div.innerHTML = `
    <h1>${pokemon.name}</h1>
    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" />
    <button>View more</button>`

    return div
}

const getPokemon = async (url) => {
    const res = await fetch(url)
    const result = await res.json()
    pokemons.appendChild(createCards(result))    
} 

const getAllPokemon = async () => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon')
    const result = await res.json()
    result.results.forEach(element => {
        getPokemon(element.url)
    });
}

getAllPokemon()