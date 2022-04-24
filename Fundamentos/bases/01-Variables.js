/* Declaración de variables */

/* 
var no se recomienda usar porque:
- las variables se crean de forma global, no respetan el scope
- pueden modificar valores del objeto global windows "console.log( window )"
- pueden ser modificadas desde otros archivos
- se pueden re-declarar
*/
var nombre = 'Oscar'
{
    var nombre = 'Eduardo'
}
{
    console.log( nombre )
}
console.log( nombre )

/* 
let
- respeta los scope
- no se pueden re-declarar
- solo se usan en el mismo archivo
- puede cambiar de tipo de dato
 */

let apellido = 'Pérez'
{
    let apellido = 'Sampayo'
    console.log( apellido);
}
{
    console.log(apellido);
}
apellido = 20

/* 
const 
- no puede cambiar de tipo de dato
- respeta los scope
- no se pueden re-declarar
- solo se usan en el mismo archivo
*/

const num = 1
{
    const num = 4
    console.log(num);
}
//num = 'uno' // -> genera un error ya que no se le puede cambiar el tipo a una constante
//num = 4     // -> genera un error ya que no se le puede cambiar el valor a una constante
console.log(num);


/* 
Buenas Practicas en declaración de variables
- declarar las variables separadas por una ","
*/
let a = 10,
    b = 20,
    c = 30,
    d = 40;