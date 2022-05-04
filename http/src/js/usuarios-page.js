import { obtenerUsuarios } from "./http-provider";

const body  = document.body;
let tBody,
    correlativo = 0

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5"> Usuarios</h1>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">email</th>
                <th scope="col">Nombre</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );

    tBody = document.querySelector('tbody')

}


// La función crearFilaUsuario debería de recibir un UNICO usuario
// con la siguiente estructura
    // {
    //     "id": 7,
    //     "email": "michael.lawson@reqres.in",
    //     "first_name": "Michael",
    //     "last_name": "Lawson",
    //     "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
    // }
const crearFilaUsuario = ( usuario ) => {

    correlativo++
    const { email, first_name, last_name, avatar } = usuario
    // En la tabla deben de colocar un correlativo empezando en 1
    // También deben de colocar el avatar

    const html = `
        <td scope="col"> ${ correlativo } </td>
        <td scope="col"> ${ email } </td>
        <td scope="col"> ${ first_name } ${ last_name } </td>
        <td scope="col">
            <img class="img-thumbnail" src="${ avatar }">
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tBody.appendChild( tr )

    // Añadir el table row (tr) dentro del TBody creado anteriormente

}


export const init = async () => {

    crearHtml();
    correlativo = 0;

    (await obtenerUsuarios()).forEach( crearFilaUsuario );

    /* obtenerUsuarios().then( users => {
        for( const user of users){
            crearFilaUsuario( user )
        }
    } ) */

    /* const usuarios = await obtenerUsuarios()
    usuarios.forEach( crearFilaUsuario ) */

    // Obtener la lista de usuarios usando el servicio creado
    // Por cada usuario, llamar la función crearFila (for, forEach)
    // Colocar el init en el index.js, para que se ejecute la creación

}

