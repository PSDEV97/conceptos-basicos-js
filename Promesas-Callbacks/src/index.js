//Estilos
import { buscarHeroe as buscarHeroeCallbacks } from './js/callbacks';
import { buscarHeroe } from './js/promesas';
import './styles.css';

const heroeId1 = 'capi'
const heroeId2 = 'iron'

/* buscarHeroe( heroeId1, ( err, heroe ) => {

    if( err ){

        console.log( err );
    }else {
        console.error( heroe );
    }
}) */

buscarHeroe( heroeId1 ).then(heroe => {
    console.log(`Enviando a ${ heroe.nombre } a la misión`);
})

console.log('Fin del programa');
