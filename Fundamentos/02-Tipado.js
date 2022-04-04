/* Primitivos -> no son inmutables */

/* Tipo Numérico(number) -> enteros, flotantes, etc.*/
let num = 10,
    decimal = 25.233

// Devuelve el tipo de dato de la variable o función
console.log( typeof num );

/* Tipo String -> cadena de caracteres */
let nombre   = 'Oscar',
    apellido = "Pérez",
    ciudad   = `Cartagena` 

console.log( typeof nombre );

/* Tipo Booleano (boolean) -> solo acepta valores de true o false*/
let isRed  = true,
    isBlue = false
console.log( typeof isRed );

/* Tipo Null -> Sin valor*/
let a = null
console.log( typeof a );

/* Tipo Undefined -> No se le asigna un valor*/
let b
console.log( typeof b );

/* Tipo Symbol -> es un valor único que no es igual a ningún otro valor*/
let sym1 = Symbol("foo")
let sym2 = Symbol("foo")
console.log( sym1 === sym2 )

console.log( typeof sym1 );