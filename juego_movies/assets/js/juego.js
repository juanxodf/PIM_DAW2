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
let elements = elementDeck
const respuestas = document.getElementById("adivinadas")
let dragged

//Evento para el botón nuevo juego
const newGame = document.getElementById("show-movie")
// Al hacer click en el botón de nuevo juego, se reinicia el mazo de películas y se saca una película al azar
newGame.addEventListener("click", () => {
    const elementDiv = document.getElementById("elementos-pelicula")
    elementDiv.innerHTML = ""

    // cada vez que le damos al boton de mostrar pelicula, reiniciamos el mazo del boton "Adivina"
    elements = getElementsDeck()

    // cogemos el mazo de películas
    if (movieDeck.length === 0) {
        movieDeck = getMoviesDeck()
    }
    let movies = movieDeck
    let index = Math.floor(Math.random() * movies.length)
    let movie = movies.splice(index, 1)[0]

    const movieDiv = document.getElementById("pelicula-caratula")
    movieDiv.innerHTML = `<img src="assets/movies/${movie}.jpg" class="elemento" alt="">`

    respuestas.innerHTML = ''

    for (let i = 0; i < 3; i++) {
        let div = document.createElement('div')
        div.className = 'elemento2 drop-zone'

        div.addEventListener('dragover', e => e.preventDefault()) // Necesario
        div.addEventListener('drop', e => {
            e.preventDefault()
            if (movie.slice(0, 2) == dragged.id.slice(0,2)) {
                console.log("au")
                div.outerHTML = dragged.outerHTML
                elementDiv.removeChild(dragged)
            }

        })

        respuestas.appendChild(div)
    }
})

//Evento para el botón adivina
const guess = document.getElementById("guess")

// Al hacer click en el botón de adivina, se saca un recurso al azar
guess.addEventListener("click", () => {

    // cogemos un recurso al azar del mazo de elementos
    let element = elements.splice(0, 1)[0]

    // cogemos el div donde se van a poner los recursos y añadimos el recurso
    const elementDiv = document.getElementById("elementos-pelicula")

    let div = document.createElement('div')
    div.className = 'elemento'
    div.setAttribute('draggable', 'true')
    div.id = element
    div.innerHTML = `<img class="recurso" src="./assets/characters/${element}.jpg" alt="" draggable="false">`

    console.log("Elemento creado")


    // Manejador de cuando se pincha para empezar a arrastrar
    div.addEventListener('dragstart', (ev) => {
        console.log(`Empieza a arrastrarse ${element}`)
        dragged = ev.target

    })


    elementDiv.appendChild(div)
})
