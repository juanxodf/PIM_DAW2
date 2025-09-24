/*
    Vamos a crear dos montones de tarjetas, uno de películas 
    y otro de recursos relacionados: 
 */
// En este caso, 5 películas y 3 recursos por película
const NMOVIES = 5
const NELEMENTSPMOVIE = 3
const getMoviesDeck = () => {
    let movieDeck = []
    for (let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0" + i + "M")
    }
    movieDeck = _.shuffle(movieDeck)
    return movieDeck;
}

const getElementsDeck = () => {
    let elementDeck = []
    for (let i = 1; i <= NMOVIES; i++) {
        for (let j = 0; j < NELEMENTSPMOVIE; j++) {
            elementDeck.push("0" + i + "C" + j)
        }
    }
    elementDeck = _.shuffle(elementDeck)
    return elementDeck;
}

let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()

//Evento para el botón nuevo juego
const newGame = document.getElementById("show-movie")
// Al hacer click en el botón de nuevo juego, se reinicia el mazo de películas y se saca una película al azar
newGame.addEventListener("click", () => {
    const elementDiv = document.getElementById("elementos-pelicula")
    elementDiv.innerHTML = ""
    // cogemos el mazo de películas
    if (movieDeck.length === 0) {
        movieDeck = getMoviesDeck()
    }
    let movies = movieDeck
    let index = Math.floor(Math.random() * movies.length)
    let movie = movies.splice(index, 1)[0]

    const movieDiv = document.getElementById("pelicula-caratula")
    movieDiv.innerHTML = `<img src="assets/movies/${movie}.jpg" class="elemento" alt="">`
})

//Evento para el botón adivina
const guess = document.getElementById("guess")
// Al hacer click en el botón de adivina, se saca un recurso al azar
guess.addEventListener("click", () => {
    
    // cogemos el mazo de recursos
    let elements = elementDeck

    // cogemos un recurso al azar del mazo
    let element = elements.splice(0, 1)[0]

    // cogemos el div donde se van a poner los recursos y añadimos el recurso
    const elementDiv = document.getElementById("elementos-pelicula")
    elementDiv.innerHTML += `<img src="assets/characters/${element}.jpg" class="recurso" alt="">`
})
