import { ITodo } from '../../models'

export enum TodosActionTypes {
    FETCH_TODOS = "FETCH_TODOS",
    FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS",
    FETCH_TODOS_FAILED = "FETCH_TODOS_FAILED",
    SET_TODO_PAGE = "SET_TODO_PAGE"
}

export interface ITodoState {
    todos: ITodo[] | undefined,
    loading: boolean,
    error: string | undefined ,
    page: number,
    limit: number
}   

interface TodoActionFetch {
    type: TodosActionTypes.FETCH_TODOS
}

interface TodoActionSuccess {
    type: TodosActionTypes.FETCH_TODOS_SUCCESS,
    payload: ITodo[]
}

interface TodoActionFailed {
    type: TodosActionTypes.FETCH_TODOS_FAILED,
    payload: string
}

interface SetTodoPage {
    type: TodosActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoAction = TodoActionFetch | TodoActionSuccess | TodoActionFailed | SetTodoPage