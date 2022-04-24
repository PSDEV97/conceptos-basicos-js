const fecha = new Date()
//const dia = fecha.getDay()
const dia = 0
const horaActual = fecha.getHours()

let horaApertura
let horaCierre
let mensaje

/* if( [0,6].includes( dia )){
    console.log('Fin de semana')
    horaApertura = 9
}else{
    console.log('Día de semana')
    horaApertura = 11
} */

horaApertura =  ( [0,6].includes( dia ) ) ? 9 : 11
horaCierre = ( [0,6].includes( dia ) ) ? 18 : 17

/* if(horaActual >= horaApertura ){
    mensaje = 'Está abierto'
}else{
    mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`
} */

mensaje = ( horaActual >= horaApertura && horaActual <= horaCierre ) ? 'Está abierto' : `Está cerrado, hoy abrimos de ${ horaApertura }:00 a ${ horaCierre }:00 `

console.log({ horaActual, horaApertura, mensaje })