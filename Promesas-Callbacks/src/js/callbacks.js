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

export const buscarHeroe = ( id, callback ) => {
    const heroe = heroes[id]
    if( heroe ){
        callback( null, heroe )
    }else{
        callback(`No existe un héroe con el id ${ id }`)
    }
}