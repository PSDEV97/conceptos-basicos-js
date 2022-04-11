//Funciones
//Declaración de funciones


//Las funciones se utilizan cuando necesitas repetir algunas líneas de código varias veces
function saludar() {
    console.log('¡Hola mundo!')
}

saludar() //realiza un llamado a la función

//Función anónima

const saludar2 = function() {
    console.log('Hola mundo')
}
saludar2()

//Argumentos
function saludar3( nombre ) {
    console.log(arguments);
    console.log('Hola', nombre)
}
saludar3('Oscar')
saludar3('Oscar', 'Pérez', 'Sampayo')

//Funciones de flecha

const sumar = (num1, num2) => {
    return num1 + num2
}

const sumar2 = (num1, num2) => num1 + num2

//Si una función no tiene un return esta devuelve undefined
console.log(sumar(1,2));

const getAleatorio2 = () => Math.random()



function crearPersona( nombre, apellido ) {
    return { // si el nombre de la propiedad es igual al de la variable, esta se puede obviar
        nombre,
        apellido
    }
}

const crearPersona2 = (nombre, apellido ) => ({nombre, apellido})

//para poder utilizar los argumentos dentro de una función de flecha se debe de realizar de la siguiente forma
const argumentos = ( ...args ) => { //Parametro rest
    console.log( args)
}