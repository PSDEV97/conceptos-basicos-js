//Objetos Literales

let persona = {
    nombre: 'Antonio',
    apellido: 'Banderas',
    edad: 61,
    'esta vivo': true, //para colocar especios o guiones en los nombres de propiedad hay que colocarlos como string
}

//Acceder a una propiedad del objeto
persona.nombre
persona['nombre']

//Agregar más propiedades
persona.esActor = true
persona['genero'] = 'M'

//Pares de valores
Object.entries(persona) //devuelve un array con las propiedades de un objeto y sus respectivos valores

//Bloqueo de propiedades
Object.freeze(persona) //Impide que se agreguen o modifiquen las propiedades del objeto

Object.getOwnPropertyNames(persona) //Devuelve un arreglo de los nombres de las propiedades del objeto

//Desestructuración