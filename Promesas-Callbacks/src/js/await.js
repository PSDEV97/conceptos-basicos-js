import { buscarHeroe, buscarHeroeAsync } from './promesas'

const heroesIds = ['capi', 'iron', 'spider']
const heroesPromesa = heroesIds.map( buscarHeroe )

/* export const obtenerHeroesArr = async () => {

    const heroesArr = []

    for( const id of heroesIds ){
        const heroe = await buscarHeroeAsync(id)
        heroesArr.push( heroe )
    }

    return heroesArr 
} */

/* export const obtenerHeroesArr = async () => {

    const heroesArr = []

    for( const id of heroesIds ){
        heroesArr.push( buscarHeroeAsync(id) )
    }

    return await Promise.all( heroesArr )
} */

export const obtenerHeroesArr = async() => {
    return await Promise.all( heroesIds.map( buscarHeroe ) )
}

export const obtenerHeroesAwait = async ( id ) => {
    try {
        const heroe = await buscarHeroeAsync( id )
        return heroe
    } catch (err ) {        
        console.log('CATCH!!');
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        }
    }
}

export const heroesCiclo = async () => {
    console.time('HeroesCiclo');

    /* const heroes = await Promise.all( heroesPromesa )
    console.log( heroes ); */

    for await( const heroe of heroesPromesa ){
        console.log(heroe);
    }


    console.timeEnd('HeroesCiclo')
}


export const heroeAwait = async ( id ) => {
    if( (await buscarHeroeAsync(id)).nombre === 'Iron Man'){
        console.log('Yo soy Iron Man');
    }else{
        console.log('No soy Iron');
    }
}

