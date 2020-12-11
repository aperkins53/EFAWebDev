let baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
let url;

const name = document.querySelector("#name");
const primaryType = document.querySelector("#primaryType");
const secondaryType = document.querySelector("#secondaryType");
const pokedexNumber = document.querySelector("#pokedexNumber");
const ability = document.querySelector("#ability");
const move = document.querySelector("#move");
const imageLabel = document.getElementById("imageLabel");
const pokemonImage = document.querySelector("#pokemonImage");
const pokemonBackImage = document.querySelector("#pokemonBackImage");
const shinyImage = document.querySelector("#shinyImage");
const shinyBackImage = document.querySelector("#shinyBackImage");
const searchTerm = document.querySelector(".search");
const searchForm = document.querySelector("form");
const submitButton = document.querySelector(".submit");

searchForm.addEventListener("submit", getPokemonData);

function getPokemonData(e){
    e.preventDefault();
    url = `${baseUrl}${searchTerm.value}/`;

    fetch(url)
        .then((res) => res.json())
        .then((json) => displayPokemonData(json));
}

function displayPokemonData(pokemonToDisplay){
    let pokemonName = pokemonToDisplay.name;
    let pokemonTypePrimary = pokemonToDisplay.types[0].type.name;
    let pokemonTypeSecondary;
    let pokemonTypeSecondary = pokemonToDisplay.types[1].type.name;
    let pokemonPokedexNumber = pokemonToDisplay.id;
    let pokemonAbility = pokemonToDisplay.abilities[0].ability.name;
    let pokemonMove = pokemonToDisplay.moves[0].move.name;
    let img = pokemonToDisplay.sprites.front_default;
    let backImg = pokemonToDisplay.sprites.back_default;
    let shinyImg = pokemonToDisplay.sprites.front_shiny;
    let shinyBackImg = pokemonToDisplay.sprites.back_shiny;

    console.log(pokemonToDisplay);
    console.log(pokemonName);
    console.log(pokemonTypePrimary);
    console.log(pokemonTypeSecondary);
    console.log(pokemonPokedexNumber);
    console.log(pokemonAbility);
    console.log(pokemonMove);

    name.innerText = pokemonName;
    primaryType.innerText = `Primary Type: ${pokemonTypePrimary}`;
    secondaryType.innerText = `Secondary Type: ${pokemonTypeSecondary}`;
    pokedexNumber.innerText = `Pokedex Number: ${pokemonPokedexNumber}`;
    ability.innerText = `Preferred Ability: ${pokemonAbility}`;
    move.innerText = `Signature Move: ${pokemonMove}`;
    imageLabel.innerText = "Normal and Shiny Sprites";
    pokemonImage.src = img;
    pokemonBackImage.src = backImg;
    shinyImage.src = shinyImg;
    shinyBackImage.src = shinyBackImg;
}