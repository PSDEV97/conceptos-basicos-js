//Estilos
import { buscarHeroe as buscarHeroeCallbacks } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi2'
const heroeId2 = 'iron'

/* buscarHeroe( heroeId1, ( err, heroe ) => {

    if( err ){

        console.log( err );
    }else {
        console.error( heroe );
    }
}) */

/* buscarHeroe( heroeId1 ).then(heroe => {
    //console.log(`Enviando a ${ heroe.nombre } a la misión`);

    buscarHeroe( heroeId2 ).then( heroe2 => {
        console.log(`Enviando a ${ heroe.nombre } y ${ heroe2.nombre } a la misión `);
    })
}) */

Promise.all([ buscarHeroe( heroeId1), buscarHeroe( heroeId2)])
    .then( ([heroe1, heroe2]) => {
    // console.log('promise.all', heroes);
    console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la misión `);
    })
    .catch( err => {
        alert( err )
    })
    .finally( () => {
        console.log('Se termino el Promise.all');
    })

console.log('Fin del programa');
