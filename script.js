const form = document.getElementById("numberForm");
const input = document.getElementById("numberInput");

form.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const numberValue = input.value.trim();
    if (numberValue !== "") {
        const pokemonData = await fetchPokemon(numberValue); 
        displayPokemon(pokemonData);
        input.value = ""; 
    }
});

async function fetchPokemon(number) {
    const url = `https://pokeapi.co/api/v2/pokemon/${number}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

displayPokemon = (pokemonData) => {
    const pokemonName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
    const pokemonImage = pokemonData.sprites.front_default;

    const pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML = `
    <h2>${pokemonName}</h2>
    <img src="${pokemonImage}" alt="${pokemonName}" />
  `;
}