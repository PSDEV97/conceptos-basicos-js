const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Fuerza Sobrehumanas'
    },
    iron: {
        nombre: 'Iron Man',
        poder: 'Intelecto nivel genio'
    },
    spider: {
        nombre: 'Spider Man',
        poder: 'Lanzar telarañas'
    },
}


export const buscarHeroe = ( id ) => {
    const heroe = heroes[id]

    return new Promise( ( resolve, reject ) => {
        if( heroe ){
            resolve( heroe )
        }else {
            reject(`No existe un héroe con el id ${ id }` )
        }
    })
}