import { UsersActionTypes, IUserState, UserAction } from '../types/user'

const defaultState: IUserState = {
    users: [],
    loading: false,
    error: undefined
}

export const usersReducer = (state = defaultState, action: UserAction): IUserState => {
    switch (action.type) {
        case UsersActionTypes.FETCH_USERS: 
            return {loading: true, error: undefined, users: []}
        case UsersActionTypes.FETCH_USERS_SUCCESS:
            return {loading: false, error: undefined, users: action.payload}
        case UsersActionTypes.FETCH_USERS_FAILED:
            return {loading: false, error: action.payload, users: []}
        default:
            return state;
    }
}