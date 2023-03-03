import axios from "axios"
import AxiosError from "axios-error"
import { IUser } from '../../models'
import { UserAction, UsersActionTypes } from "../types/user"
import { Dispatch } from 'redux'

const setUsers = (payload: any) => {
    return {
        type: UsersActionTypes.FETCH_USERS_SUCCESS, 
        payload: payload
    }
}

const setError = (payload: any) => {
    return {
        type: UsersActionTypes.FETCH_USERS_FAILED, 
        payload: payload
    }
}

export const getUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UsersActionTypes.FETCH_USERS})
            const response = await axios.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`)
            dispatch({
                type: UsersActionTypes.FETCH_USERS_SUCCESS, 
                payload: response.data
            })
        } catch (e: unknown) {
            const err = e as AxiosError
            dispatch({
                type: UsersActionTypes.FETCH_USERS_FAILED, 
                payload: err.message
            })
        }
    }
}