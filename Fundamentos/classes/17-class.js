class Persona {

    //Propiedades y métodos estáticos
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log( this.nombre );
        console.log('Hola a todos, soy un método estático');
    }

    //Propiedades
    nombre = '';
    codigo = '';
    frase  = '';


    //Constructor de la clase
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase'){
        //console.log('Hola');
        this.nombre = nombre
        this.codigo = codigo
        this.frase  = frase

        Persona._conteo++
    }


    //método de clase
    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }
}

const spiderMan = new Persona('Peter Parker', 'SpiderMan', '¡No temas, ha llegado el Arácnido!')
const ironMan   = new Persona('Tony Star', 'IronMan', 'El traje y yo somos uno')
/* console.log( spiderMan );
console.log( ironMan ); */

spiderMan.quienSoy()

/* console.log( 'Conteo: ', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje( ) */


//Sub-clase

class SuperHeroe extends Persona {
    clan = 'sin clan'

    constructor( nombre, codigo, frase, clan){
        super(nombre, codigo, frase)
        this.clan = clan 
    }
}

const superMan = new SuperHeroe()

console.log(superMan);
superMan.quienSoy()


class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
        this.#duplicarArea()
    }

    #duplicarArea() {
        this.#area *= 2;
    }
}

const rectangulo = new Rectangulo(10, 15)

console.log(rectangulo);