import { IUser } from '../../models'

export enum UsersActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAILED = "FETCH_USERS_FAILED"
}

export interface IUserState {
    users: IUser[] | undefined,
    loading: boolean,
    error: string | undefined
}

interface IFetchUserAction {
    type: UsersActionTypes.FETCH_USERS,
}

interface IFetchUserSuccessAction {
    type: UsersActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}

interface IFetchUserFailedAction {
    type: UsersActionTypes.FETCH_USERS_FAILED,
    payload: string
}

export type UserAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserFailedAction