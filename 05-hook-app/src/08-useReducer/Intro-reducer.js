
const initialState = [
    {
        id: 1,
        todo: 'Recolectar la piedra del alma',
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if(action.type === '[ToDO] add todo'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
        id: 2,
        todo: 'Recolectar la piedra del poder',
        done: false
    }

    const addToAction = {
        type: '[ToDO] add todo',
        payload: newTodo,
    }

todos = todoReducer(todos, addToAction)
console.log({state: todos});

