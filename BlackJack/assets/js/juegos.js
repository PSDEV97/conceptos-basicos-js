/* PATRÓN MÓDULO */
(() => {
    'use strict'

    /* BARAJA DE CARTAS */
    let baraja       = []
    const tipos      = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'K', 'Q', 'J'];

    /* PUNTUACIÓN */
    let puntosJugadores = []

    /* REFERENCIAS HTML*/
    const btnPedirCarta      = document.querySelector('#btn-pedir-carta'),
          btnNuevoJuego      = document.querySelector('#btn-nuevo-juego'),
          btnDetener         = document.querySelector('#btn-detener'),
          puntosHTML         = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas')


    /**
     * Inicializa la partida de blackjack
     * @param {number} numJugadores 
     */
    const inicializarJuego = (numJugadores = 1) => {
        baraja = crearBaraja()

        puntosJugadores = []
        for(let i = 0; i <= numJugadores; i++){
            puntosJugadores.push(0)
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach( elem => elem.innerHTML = '' );

        btnPedirCarta.disabled   = false;
        btnDetener.disabled = false;
    }

    /**
     * Crea la baraja de cartas
     * @returns arreglo con las cartas en desorden 
     */
    const crearBaraja = () => {
        baraja = []
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
        return _.shuffle( baraja )
    }    

    /**
     * Permite al jugador en turno sacar una carta de la baraja
     * @returns carta de la baraja 
     */
    const pedirCarta = () => {
        if( baraja.length === 0){
            throw 'No hay cartas en el desk'
        }          
        return baraja.pop()   
    }

    /**
     * Calcula el valor de un carta en la partida de blackjack
     * @param {string} carta 
     * @returns valor de la carta
     */
    const valorCarta = ( carta ) => {
        const valor = carta.substring(0, carta.length - 1)
        return (isNaN( valor )) ?
                (valor === 'A') ? 11 : 10
                : valor * 1 
    }


    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores
        
        setTimeout(() => {
            if( puntosComputadora === puntosMinimos){
                alert('Empate')
            }else if( puntosMinimos > 21 ){
                alert('¡Computadora Gana!')
            }else if( puntosComputadora > 21){
                alert('¡Jugador Gana!')
            }else {
                alert('¡Computadora Gana!')
            }
        }, 100)
    } 


    const acumularPuntos = ( carta, turno ) => {
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta)
        puntosHTML[turno].innerText = puntosJugadores[turno]
        return puntosJugadores[turno]
    }

    const agregarCarta = ( carta, turno) => {
        const imgCartas = document.createElement('img')
        imgCartas.src = `assets/cartas/${ carta }.png`
        imgCartas.classList.add('carta')
        divCartasJugadores[turno].append( imgCartas )
    }

    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0

        do {
            const carta = pedirCarta()
            puntosComputadora = acumularPuntos( carta, puntosJugadores.length - 1)
            agregarCarta(carta, puntosJugadores.length - 1 )

        } while ( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) )
        
        determinarGanador()
    }

    /* EVENTOS */
    inicializarJuego()

    btnPedirCarta.addEventListener('click',() => {
        
        const carta = pedirCarta()
        const puntosJugador = acumularPuntos( carta, 0 )
        agregarCarta(carta, 0 )

        if(puntosJugador > 21  ){
            btnPedirCarta.disabled = true
            btnDetener.disabled    = true
            turnoComputadora(puntosJugador)
        } else if( puntosJugador === 21){

            btnPedirCarta.disabled = true
            btnDetener.disabled    = true
            turnoComputadora(puntosJugador)
            
        } 
    })

    btnDetener.addEventListener('click', () => {
        btnPedirCarta.disabled = true
        btnDetener.disabled    = true
        turnoComputadora(puntosJugadores[0])
    } )

    btnNuevoJuego.addEventListener('click', () => {  
        inicializarJuego()
    })
})()

