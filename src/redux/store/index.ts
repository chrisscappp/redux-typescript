import { createStore, combineReducers, applyMiddleware } from "redux";
import { usersReducer } from "../reducers/usersReducer";
import { todoReducer } from '../reducers/todoReducer'
import { postsReducer } from '../reducers/postsReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    usersReducer,
    todoReducer,
    postsReducer
})

// т.к дефолтный useSelector плохо дружит с типами, напишем свой собственный

export type RootState = ReturnType<typeof rootReducer> // вытащили тип селектора

export const store = createStore(rootReducer, applyMiddleware(thunk))