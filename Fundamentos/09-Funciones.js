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

console.log(sumar(1,2));