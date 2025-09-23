/**
 * Vamos a crear dos montones de tarjetas, uno de películas y otro de recursos relacionados:
 * 
 */
const NMOVIES = 5
const NELEMENTSPMOVIE = 3
const getMoviesDeck = () => {
    let movieDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        movieDeck.push("0"+i+"M")
    }
    //Barajamos con un método dela librería Underscore. Esta librería ofrece muchas funciones,
    //en este caso uso shuffle que recibe un arrayy lo devuelve de forma aleatoria
    //movieDeck = _.shuffle(movieDeck)
    return movieDeck;
}

const getElementsDeck = () => {
    let elementDeck = []
    for(let i = 1; i <= NMOVIES; i++) {
        for(let j = 1; j <= NELEMENTSPMOVIE; j++) {
            elementDeck.push("0"+i+"C"+j)
        } 
    }
    //Barajamos
    //elementDeck = _.shuffle(elementDeck)
    return elementDeck;
}

let movieDeck = getMoviesDeck()
let elementDeck = getElementsDeck()

//Evento para el botón nuevo juego
const newGame = document.getElementById("newGame")
// Al hacer click en el botón de nuevo juego, se reinicia el mazo de películas y se saca una película al azar
newGame.addEventListener("click",() => {
    // cogemos el mazo de películas
    let movies = movieDeck
    let movie = movies.splice(Math.floor(Math.random()*movieDeck.length,1))[0]

    const movieDiv = document.getElementById("pelicula-caratula")
    movieDiv.innerHTML += `<img src="assets/movies/${movie}.jpg" class="elemento" alt="">`
})