
let a = 5;

if (a > 10 ) {
    console.log('A es mayor a 10')
}else if (a < 10) {
    console.log('A es menor a 10')
}else{
    console.log('A es igual a 10');
}

console.log('Fin del programa')


//Días de la semana
const fecha = new Date()
const dia = fecha.getDay()
const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sabado']
const diaSemana2 = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado',
}
console.log('Hoy es', diaSemana[dia])
console.log('Hoy es', diaSemana2[dia])
