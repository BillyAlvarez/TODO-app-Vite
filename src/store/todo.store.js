import {Todo} from '../todos/models/todo.models'

const Filters = {
    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state  = {
    todos : [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),

    ],
    filter: Filters.All,
}


const initStore = () =>{
    console.log(state);
    console.log('initializing store 🥑');
}

const loadStore = () =>{
    throw new Error('Not Implemented ❌');
}

const addTodo = ( description ) => {
    throw new Error('Not Implemented ❌');
}

const toggleTodo = ( todoId ) => {
    throw new Error('Not Implemented ❌');
}

const deleteTodo = ( todoId ) => {
    throw new Error('Not Implemented ❌');
}

const deleteCompleted = () => {
    throw new Error('Not Implemented ❌');
}

const setFilter = ( newFilter = Filters.All) => {
    throw new Error('Not Implemented ❌');
}

const getCurrentFilter = () => {
    throw new Error('Not Implemented ❌');
}


export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
}
