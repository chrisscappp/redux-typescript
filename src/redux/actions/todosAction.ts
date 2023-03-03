import axios from "axios"
import AxiosError from "axios-error"
import { ITodo } from '../../models'
import { TodoAction, TodosActionTypes } from '../types/todo'
import { Dispatch } from 'redux'

export const getTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodosActionTypes.FETCH_TODOS})
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos`, {
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            dispatch({
                type: TodosActionTypes.FETCH_TODOS_SUCCESS,
                payload: response.data
            })
        } catch (e: unknown) {
            const err = e as AxiosError
            dispatch({
                type: TodosActionTypes.FETCH_TODOS_FAILED,
                payload: err.message
            })
        }
    }
}

export function setTodoPage (page: number): TodoAction {
    return {
        type: TodosActionTypes.SET_TODO_PAGE,
        payload: page
    }
}