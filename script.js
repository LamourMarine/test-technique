const apiURL = 'https://pokeapi.co/api/v2/pokemon/';
const pokemonCard = document.querySelector('.pokemon-card');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonStats = document.querySelector('.pokemon-stats');
const pokemonTypes = document.querySelector('.pokemon-types');
const cardImage = document.querySelector('.card-image');
const cardInfo = document.querySelector('.card-info');

const searchButton = document.querySelector('.searchButton');
const searchInput = document.getElementById('mySearch');
const pokemonInput = document.getElementById('pokemonInput');
const image = document.createElement('img');
const statsList = document.createElement('ul');




// Utilisation de la fonction fetch pour appeler l'API
function fetchCharacterData(characterName){

fetch(apiURL+characterName)
    .then(Response => {
        if (!Response.ok) {
            throw new Error("Ce Pokémon n'existe pas ou le nom est mal orthographié.");
        }
                return Response.json(); // On convertit la réponse en format JSON
})
    .then(data => {
        statsList.innerHTML = '';
        document.querySelector('.errorText').classList.remove('show');
        const types = data.types.map(typeEntry => typeEntry.type.name);
        // const stats = data.stats.map(statEntry => statEntry.stat.name + ": " + statEntry.base_stat);
        data.stats.forEach(statEntry => {
            const listItem = document.createElement('li'); // Crée un élément de liste
            listItem.innerText = (statEntry.stat.name + ": " + statEntry.base_stat); // Remplit l'élément avec le nom et la valeur
            statsList.appendChild(listItem); // Ajoute l'élément à la liste
        });
        cardInfo.appendChild(statsList);

        // remplir les sections avec les données
        pokemonName.innerText = data.name;
        pokemonTypes.innerText = types.join(", ");

        switch (types[0]||!types) {
            case 'normal':
                pokemonCard.style.backgroundColor = '#9FA19FAA';
                break;

            case 'fighting':
                pokemonCard.style.backgroundColor = '#FF8000AA';
                break;

            case 'flying':
                pokemonCard.style.backgroundColor = '#81B9EFAA';
                break;

            case 'poison':
                pokemonCard.style.backgroundColor = '#9141CBAA';
                break;

            case 'ground':
                pokemonCard.style.backgroundColor = '#915121AA';
                break;

            case 'rock':
                pokemonCard.style.backgroundColor = '#AFA981AA';
                break;

            case 'bird':
                pokemonCard.style.backgroundColor = '#68A090AA';
                break;

            case 'bug':
                pokemonCard.style.backgroundColor = '#91A119AA';
                break;

            case 'ghost':
                pokemonCard.style.backgroundColor = '#704170AA';
                break;

            case 'steel':
                pokemonCard.style.backgroundColor = '#60A1B8AA';
                break;

            case 'fire':
                pokemonCard.style.backgroundColor ='#E62829AA';
                break;

            case 'water':
                pokemonCard.style.backgroundColor = '#2980EFAA';
                break;

            case 'grass':
                pokemonCard.style.backgroundColor = '#3FA129AA';
                break;

            case 'electric':
                pokemonCard.style.backgroundColor = '#FAC000AA';
                break;

            case 'psychic':
                pokemonCard.style.backgroundColor = '#EF4179AA';
                break;

            case 'ice':
                pokemonCard.style.backgroundColor = '#3DCEF3AA';
                break;

            case 'dragon':
                pokemonCard.style.backgroundColor = '#5060E1AA';
                break;

            case 'dark':
                pokemonCard.style.backgroundColor = '#624D4EAA';
                break;

            case 'fairy':
                pokemonCard.style.backgroundColor = '#EF70EFAA';
                break;

            default: 
                pokemonCard.style.backgroundColor = '#EF70EFAA';
                break;
        }


        image.setAttribute("src", data.sprites.front_default);
        cardImage.append(image);
    })
    .catch(error => {
        document.querySelector('.errorText').innerText=error.message;
        document.querySelector('.errorText').classList.add('show');
      });
    }


function searchPokemon(){
    const characterName = pokemonInput.value.trim().toLowerCase();  // Récupère la valeur entrée et supprime les espaces inutiles
    if (characterName) {
        fetchCharacterData(characterName); // Appel la fonction fetchCharacterData
    } else {
        document.querySelector('.errorText').innerText="Veuillez entrer un nom de Pokemon";
        document.querySelector('.errorText').classList.add('show');

    }

}

    searchButton.addEventListener("click", () => {
    searchPokemon();
})

pokemonInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchPokemon();
    }
});
