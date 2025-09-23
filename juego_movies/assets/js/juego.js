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
    return movieDeck;
}

const getElementsDeck = () => {
    let elementDeck = []
    for (let i = 1; i <= NMOVIES; i++) {
        for (let j = 1; j <= NELEMENTSPMOVIE; j++) {
            elementDeck.push("0" + i + "C" + j)
        }
    }
    return elementDeck;
}

let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()

//Evento para el botón nuevo juego
const newGame = document.getElementById("show-movie")
// Al hacer click en el botón de nuevo juego, se reinicia el mazo de películas y se saca una película al azar
newGame.addEventListener("click", () => {
    // cogemos el mazo de películas
    let movies = movieDeck
    let clicks = 0
    if (clicks < NMOVIES) {
        let index = Math.floor(Math.random() * movies.length)
        let movie = movies.splice(index, 1)[0]
        const movieDiv = document.getElementById("pelicula-caratula")
        movieDiv.innerHTML = `<img src="assets/movies/${movie}.jpg" class="elemento" alt="">`
        ++clicks
    }
})