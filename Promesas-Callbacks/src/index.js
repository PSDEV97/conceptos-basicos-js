//import { buscarHeroe, buscarHeroeAsync } from "./js/promesas";

import { heroeAwait, heroesCiclo } from "./js/await";

//import { obtenerHeroesArr, obtenerHeroesAwait } from "./js/await";


/* promesaLenta.then( console.log )
promesaMedia.then( console.log )
promesaRapida.then( console.log ) */

/* Promise.race([ promesaLenta, promesaMedia, promesaRapida])
    .then( console.log )
    .catch( console.warn ) */

/* buscarHeroe( 'capi2' )
    .then( console.log )
    .catch( console.warn )

buscarHeroeAsync( 'iron2' )
    .then( console.log )
    .catch( console.warn ) */

/* console.time('await')
obtenerHeroesAwait('capi2')
    .then( heroe => {    
        console.log(heroe)
        console.timeEnd('await')        
    } )
    .catch( console.warn ) */

heroesCiclo()

heroeAwait('capi')