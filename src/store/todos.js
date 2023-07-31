const ALL_TODOS = 'todos/allTodos';
const ADD_TODO = 'todos/addTodo';
const UPDATE_TODO = 'todos/updateTodo';
const DELETE_TODO = 'todos/deleteTodo';
const SEARCH_TODOS = 'todos/searchedTodos';

const allTodos = (todos) => {
    return {
        type: ALL_TODOS,
        todos
    }
};

const searchedTodos = (todos) => {
    return {
        type: SEARCH_TODOS,
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

export const patchTodoStatus = (todo) => async (dispatch) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (res.status === 500 && todo.id > 200) {
        dispatch(updateTodo(todo));
        console.log('New resource not found on server due to fake response from server. ADJUSTING DATA ACCORDINGLY.');
        return;
    };
    if (res.ok) {
        const data = await res.json();
        dispatch(updateTodo(data));
        return;
    }
};

export const addNewTodo = (todo) => async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    if (res.ok) {
        const data = await res.json();
        dispatch(addTodo(data));
        return;
    }
};

export const deleteSelectedTodo = (todoId) => async (dispatch) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
        method: 'DELETE',
      });
      if (res.status === 500 && todoId > 200) {
        dispatch(deleteTodo(todoId));
        console.log('New resource not found on server due to fake response from server. ADJUSTING DATA ACCORDINGLY.');
        return;
    };
    if (res.ok) {
        dispatch(deleteTodo(todoId));
        return;
    };
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

        case (UPDATE_TODO):
            newState = { todos: { ...state.todos } };
            newState.todos[action.todo.id] = action.todo;
            return newState;

        case (ADD_TODO):
            newState = { todos: { ...state.todos } };
            newState.todos[action.todo.id] = action.todo;
            return newState;

        case DELETE_TODO:
            newState = { todos: { ...state.todos } };
            delete newState.todos[action.todoId];
            return newState;

        default:
            return state;
    }
};

export default todoReducer;
