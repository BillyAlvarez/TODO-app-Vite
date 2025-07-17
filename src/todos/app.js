import html from './app.html?raw'
import todoStore from "../store/todo.store.js";
import {renderTodos} from "./use-cases/render-todos.js";

const ElementsIDs = {
    TodoList: '.todo-list',
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

}