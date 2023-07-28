const ALL_TODOS = 'todos/allTodos';
const ADD_TODO = 'todos/addTodo';
const UPDATE_TODO = 'todos/updateTodo';
const DELETE_TODO = 'todos/deleteTodo';

const allTodos = (todos) => {
    return {
        type: ALL_TODOS,
        todos
    }
};

const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo
    }
};

const updateTodo = (todo) => {
    return {
        type: UPDATE_TODO,
        todo
    }
};

const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        todoId
    }
};

export const getAllTodos = () => async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (res.ok) {
        const data = await res.json();
        dispatch(allTodos(data));
        console.log('Fetched Successfully');
        return;
    }
};

const initialState = { todos: {} };
const todoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        
        case (ALL_TODOS):
            newState = { todos: {} };
            action.todos.forEach(todo => {
                newState.todos[todo.id] = todo;
            });
            return newState;

        default:
            return state;
    }
};

export default todoReducer;
