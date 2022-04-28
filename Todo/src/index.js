//Estilos
import './styles.css';

//Clases
import { TodoList } from './classes'
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();
todoList.todos.forEach( crearTodoHTML );

console.log( todoList.todos );
