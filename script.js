const apiURL = 'https://pokeapi.co/api/v2/pokemon/'; 
const pokemonCard = document.querySelector('.pokemon-card');
const pokemonName = document.querySelector('.pokemon-name');
const pokemonStats = document.querySelector('.pokemon-stats');
const pokemonTypes = document.querySelector('.pokemon-types');
const cardImage = document.querySelector('.card-image');
const cardInfo = document.querySelector('.card-info');

const searchButton = document.querySelector('.searchButton');
const pokemonInput = document.getElementById('pokemonInput');
const image = document.createElement('img');



// Utilisation de la fonction fetch pour appeler l'API
function fetchCharacterData(characterName){

fetch(apiURL+characterName)
    .then(Response => {
        if (!Response.ok) {
            throw new Error('Réseau réponse pas OK');
        }
        return Response.json(); // On convertit la réponse en format JSON
})
    .then(data => {
        const types = data.types.map(typeEntry => typeEntry.type.name);
        const stats = data.stats.map(statEntry => statEntry.stat.name + ": " + statEntry.base_stat);
        // remplir les sections avec les données
        pokemonName.innerText = data.name;
        pokemonTypes.innerText = types.join(", ");

        switch (types[0]) {
            case 'normal':
                pokemonCard.style.backgroundColor = '#9FA19F';
                break;

            case 'fighting': 
                pokemonCard.style.backgroundColor = '#FF8000';
                break;

            case 'flying':
                pokemonCard.style.backgroundColor = '#81B9EF';
                break;

            case 'poison':
                pokemonCard.style.backgroundColor = '#9141CB';
                break;

            case 'ground':
                pokemonCard.style.backgroundColor = '#915121';
                break;

            case 'rock':
                pokemonCard.style.backgroundColor = '#AFA981';
                break;

            case 'bird':
                pokemonCard.style.backgroundColor = '#68A090';
                break;

            case 'bug':
                pokemonCard.style.backgroundColor = '#91A119';
                break;

            case 'ghost':
                pokemonCard.style.backgroundColor = '#704170';
                break;

            case 'steel':
                pokemonCard.style.backgroundColor = '#60A1B8';
                break;

            case 'fire': 
                pokemonCard.style.backgroundColor ='#E62829';
                break;

            case 'water':
                pokemonCard.style.backgroundColor = '#2980EF';
                break;

            case 'grass':
                pokemonCard.style.backgroundColor = '#3FA129';
                break;

            case 'electric':
                pokemonCard.style.backgroundColor = '#FAC000';
                break;

            case 'psychic':
                pokemonCard.style.backgroundColor = '#EF4179';
                break;

            case 'ice':
                pokemonCard.style.backgroundColor = '#3DCEF3';
                break;

            case 'dragon':
                pokemonCard.style.backgroundColor = '#5060E1';
                break;

            case 'dark':
                pokemonCard.style.backgroundColor = '#624D4E';
                break;

            case 'fairy':
                pokemonCard.style.backgroundColor = '#EF70EF';
                break;
        }
        

        image.setAttribute("src", data.sprites.front_default);
        cardImage.append(image);
        cardInfo.innerText = data.stats
            .map(statEntry => statEntry.stat.name + ": " + statEntry.base_stat);
            
            

            
    })
    .catch(error => {
        console.error('Erreur:', error);
      });
    }
    
    
    
    searchButton.addEventListener("click", () => {
        const characterName = pokemonInput.value.trim(); // Récupère la valeur entrée et supprime les espaces inutiles
        if (characterName) {
            fetchCharacterData(characterName); // Appel la fonction fetchCharacterData
        } else {
            alert("Veuillez entrer un nom de Pokemon")
        }
})