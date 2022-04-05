//Arreglos o Arrays

//Contiene un grupo de elementos

//Declaración de arreglos

//Vacio
let arr = [];

//De vacio de varios elementos 
let arr2 = new Array(5) //crea un arreglo de 5 elementos vacio

//Con valores iniciales
let videoJuegos = ["Mario Bros", "Megaman"] //crea un array con 2 elementos

//La primera posición de un arreglo empieza por el 0
//Ej: si se quiere obtener el primer elemento del arraglo de videoJuegos 
videoJuegos[0]

//Manejo de información con arreglos

videoJuegos.length // Regresa el tamaño del arreglo
videoJuegos.push("Pokemon") // Añade un nuevo elemento al final del arreglo, retorna la nueva longitud del arreglo
videoJuegos.unshift("Tetri") // Añade un nuevo elemento al inicio del arreglo, retorna la nueva longitud del arreglo
videoJuegos.pop() //Remueve el ultimo elemento del arreglo y lo retorna
videoJuegos.splice(posicion, numeroElementos) //Remueve el o los elementos indicados desde una posición del arreglo y retorna el array de los elementos removidos
videoJuegos.indexOf("Megaman") //Busca un elemento dentro del arreglo y devuelve su ubicación