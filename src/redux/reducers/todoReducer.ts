import { ITodoState, TodosActionTypes, TodoAction } from '../types/todo'

const defaultState: ITodoState = {
    todos: [],
    loading: false,
    error: "",
    page: 1,
    limit: 10
}

export const todoReducer = (state = defaultState, action: TodoAction): ITodoState => {
    switch (action.type) {
        case TodosActionTypes.FETCH_TODOS:
            return {...state, loading: true}
        case TodosActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, todos: action.payload, loading: false}
        case TodosActionTypes.FETCH_TODOS_FAILED:
            return {...state, error: action.payload, loading: false}
        case TodosActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}