//Todos los primitivos se pasan por valor y los objetos por referencia

let juan = {
    nombre: 'Juan'
}

let ana = juan
ana.nombre = 'Ana'

console.log(juan, ana);

//Para que esto no ocurra hay que pasar el objeto con el operador sprint

let oscar = {
    nombre: 'Oscar'
}
let dana = { ...oscar } //Operador Sprint
dana.nombre = 'Dana'

console.log(oscar, dana)

const frutas = ['Manzana', 'Pera', 'Fresa']
const otrasFrutas = frutas

otrasFrutas.push('Uva')

console.table({ frutas, otrasFrutas})

//Para evitar lo anterior se usa el operador sprint
const frutas2 = [...frutas] //también se puede usar frutas.slice()
frutas2.push('Mango')

console.table({frutas, frutas2})


console.time('texto') //medir el tiempo en que se ejecuta algo entre los dos console.time
//líneas de código
console.timeEnd('texto')