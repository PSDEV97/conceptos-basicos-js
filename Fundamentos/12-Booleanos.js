//Booleanos

console.log(true); //Verdadero
console.log(false); //Falso

//negación !true = falso o !false = true

console.log(!true); //Falso
console.log(!false); //Verdadero

//And (&&)
console.log(true  && true);  //Verdadero
console.log(false && true);  //Falso
console.log(true  && false); //Falso
console.log(false && false); //Falso
console.log(true && true && true) //Verdadero
console.log(true && true && false) //Falso


//Or (||)

console.log(true  || true);  //Verdadero
console.log(false || true);  //Verdadero
console.log(true  || false); //Verdadero
console.log(false || false); //Falso
console.log(true  || true || true) //Verdadero
console.log(true  || true || false) //Verdadero
console.log(false || false || false) //Falso


const a = null || undefined || false || 1 || '1' || 'Soy un texto' || true //Se deja de ejecutar hasta encontrar valores diferente de null, undefined y false
const b = true && 1 && 'A' && undefined && null //se deja de ejecutar hasta encontrar valores iguales a false, null o undefined
console.log({a})
console.log({b});