import html from './app.html?raw'
import todoStore, {Filters} from "../store/todo.store.js";
import {renderTodos} from "./use-cases/render-todos.js";
import {renderPending} from "./use-cases/index.js";

const ElementsIDs = {
    ClearCompleted : '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput : '#new-todo-input',
    TodoFilters : '.filtro',
    PendingCountLabel: '#pending-count',
}

export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementsIDs.TodoList , todos );
        updatePendingCount();
    }

    const updatePendingCount = ()=> {
    renderPending(  ElementsIDs.PendingCountLabel );
    }

    (()=> {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector( ElementsIDs.NewTodoInput );
    const todoListUL = document.querySelector( ElementsIDs.TodoList );
    const clearCompletedButton = document.querySelector( ElementsIDs.ClearCompleted);
    const filterLIs = document.querySelectorAll( ElementsIDs.TodoFilters );

    // Listeners

    newDescriptionInput.addEventListener('keyup', (e) => {
        if ( e.keyCode !== 13 ) return;
        if ( e.target.value.trim().length === 0 ) return;

        todoStore.addTodo( e.target.value );
        displayTodos();
        e.target.value = '';
    });

    todoListUL.addEventListener('click', (e) => {
        const element = e.target.closest( '[data-id]');
        todoStore.toggleTodo( element.getAttribute( 'data-id'));
        displayTodos();
    })

    todoListUL.addEventListener('click', (e) => {
        const isDestroyElement = e.target.className === 'destroy';
        const element = e.target.closest( '[data-id]');
        if ( !element || !isDestroyElement ) return;

        todoStore.deleteTodo( element.getAttribute( 'data-id'));
        displayTodos();
    })

    clearCompletedButton.addEventListener('click', (e) => {

        todoStore.deleteCompleted();
        displayTodos();
    })

    filterLIs.forEach( element => {

        element.addEventListener('click', (element) => {
            filterLIs.forEach( el => el.classList.remove('selected'));
            element.target.classList.add('selected');
            switch ( element.target.text){
                case 'Todos':
                    todoStore.setFilter( Filters.All)
                    break;
                case 'Pendientes':
                    todoStore.setFilter( Filters.Pending)
                    break;
                case 'Completados':
                    todoStore.setFilter( Filters.Completed)
                    break;
            }
            displayTodos();
        });

    });


}