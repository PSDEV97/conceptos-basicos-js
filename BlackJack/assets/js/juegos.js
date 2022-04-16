/* 
Nombre Cartas
2C = dos de trebol
2D = dos de diamante
2H = dos de corazones
2S = dos de espadas/picas
*/

/* BARAJA DE CARTAS */
let baraja       = []
const tipos      = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'K', 'Q', 'J']

/* PUNTUACIÓN */
let puntosJugador     = 0,
    puntosComputadora = 0

/* REFERENCIAS HTML*/
const btnPedirCarta = document.querySelector('#btn-pedir-carta'),
      btnNuevoJuego = document.querySelector('#btn-nuevo-juego'),
      btnDetener    = document.querySelector('#btn-detener'),
      puntosHTML    = document.querySelectorAll('small'),
      cartasJugador = document.querySelector('#jugador-cartas'),
      cartasComputadora = document.querySelector('#computadora-cartas')


/* FUNCIONES DEL JUEGO */

/** 
 * Esta función se encarga de crear un arreglo con los nombres de de las cartas de la baraja
 * @return Array
 **/
const crearBaraja = () => {
    for ( let i = 2; i <= 10; i++){
        for(let tipo of tipos){
            baraja.push(i + tipo)
        }
    }

    for(let especial of especiales){
        for(let tipo of tipos){
            baraja.push( especial + tipo )
        }
    }
    baraja = _.shuffle( baraja )
    return baraja
}

crearBaraja()

/** 
 *  Saca un carta de la baraja y retorna la carta
 * @returns string
 **/
const pedirCarta = () => {
    if( baraja.length === 0){
        throw 'No hay cartas en el desk'
    }
    const carta = baraja.pop()    
    return carta
}

/** 
 * Recibe el nombre de la carta y retorna el valor que le corresponde
 * @params carta string
 * @returns number
 **/
const valorCarta = ( carta ) => {
    const valor = carta.substring(0, carta.length - 1)

    const puntos = isNaN( valor ) ?
            (valor === 'A') ? 11 : 10
            : valor * 1
    
    return puntos    
}

/* Mostrar ganador */

const ganador = (puntosMinimos) => {
    if( puntosComputadora === puntosMinimos){
        alert('Empate')
    }else if( puntosMinimos > 21 ){
        alert('¡Computadora Gana!')
    }else if( puntosComputadora > 21){
        alert('¡Jugador Gana!')
    }else {
        alert('¡Computadora Gana!')
    }
}




/* Turno Computadora */
const turnoComputadora = (puntosMinimos) => {


   do {
    const carta = pedirCarta()
    puntosComputadora = puntosComputadora + valorCarta(carta)
    puntosHTML[1].innerText = puntosComputadora

    const imgCartas = document.createElement('img')
    imgCartas.src = `assets/cartas/${ carta }.png`
    imgCartas.classList.add('carta')
    cartasComputadora.append( imgCartas )

    if(puntosMinimos > 21){
        break
    }

   } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )
   setTimeout(() => {
       ganador(puntosMinimos)
   }, 100);
}


/* EVENTOS */

btnPedirCarta.addEventListener('click',() => {
    const carta = pedirCarta()
    puntosJugador = puntosJugador + valorCarta(carta)
    puntosHTML[0].innerText = puntosJugador

    const imgCartas = document.createElement('img')
    imgCartas.src = `assets/cartas/${ carta }.png`
    imgCartas.classList.add('carta')
    cartasJugador.append( imgCartas )

    if(puntosJugador > 21){
        console.warn('Lo siento mucho, perdiste')
        btnPedirCarta.disabled = true
        btnDetener.disabled    = true
        turnoComputadora(puntosJugador)
    }else if( puntosJugador === 21){
        console.warn('ganaste')
        btnPedirCarta.disabled = true
        btnDetener.disabled    = true
        turnoComputadora(puntosJugador)
        
    }
})

btnDetener.addEventListener('click', () => {
    btnPedirCarta.disabled = true
    btnDetener.disabled    = true
    turnoComputadora(puntosJugador)
} )

btnNuevoJuego.addEventListener('click', () => {
    btnPedirCarta.disabled = false
    btnDetener.disabled    = false
    puntosComputadora = 0
    puntosHTML[1].innerText = puntosComputadora
    puntosJugador = 0
    puntosHTML[0].innerText = puntosJugador
    /* while (cartasJugador.firstChild){
        cartasJugador.removeChild(cartasJugador.firstChild)
    }
    while (cartasComputadora.firstChild){
        cartasComputadora.removeChild(cartasComputadora.firstChild)
    } */

    cartasJugador.innerHTML = ''
    cartasComputadora.innerHTML = ''
    crearBaraja()

})