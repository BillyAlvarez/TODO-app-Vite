import html from './app.html?raw'
import todoStore from "../store/todo.store.js";
import {renderTodos} from "./use-cases/render-todos.js";

const ElementsIDs = {
    TodoList: '.todo-list',
    NewTodoInput : '#new-todo-input',
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementsIDs.TodoList , todos )
    }

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos()
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementsIDs.NewTodoInput);

    // Listeners

    newDescriptionInput.addEventListener('keyup', (e) => {
        if ( e.keyCode !== 13 ) return;
        if ( e.target.value.trim().length === 0 ) return;

        todoStore.addTodo( e.target.value );
        displayTodos();
        e.target.value = '';

    });

}