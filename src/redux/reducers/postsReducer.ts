import { PostsActionTypes, IPostState, PostActionType } from '../types/post'

const defaultState: IPostState = {
    posts: [],
    loading: false,
    error: "",
    page: 1,
    limit: 10
}

export const postsReducer = (state = defaultState, action: PostActionType): IPostState => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {...state, loading: true};
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, posts: action.payload, loading: false}
        case PostsActionTypes.FETCH_POSTS_FAILED:
            return {...state, error: action.payload, loading: false}
        case PostsActionTypes.SET_POST_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}