import { PostActionType, PostsActionTypes } from '../types/post'
import { getData } from '../../api/getData'
import { Dispatch } from 'redux'

export const getPosts = (page = 1, limit = 10) => {
    return (dispatch: Dispatch<PostActionType>) => {
        dispatch({type: PostsActionTypes.FETCH_POSTS})
        getData(`https://jsonplaceholder.typicode.com/posts`, {
            params: {
                _page: page,
                _limit: limit
            }
        })
            .then((res: any) => {
                //console.log(res.data)
                dispatch({type: PostsActionTypes.FETCH_POSTS_SUCCESS, payload: res.data})
            })
            .catch((e: unknown) => {
                const err = e as Error;
                //console.log(err.message)
                dispatch({type: PostsActionTypes.FETCH_POSTS_FAILED, payload: err.message})
            })
    }
}

export const setPostPage = (page: number): PostActionType  => {
    return {
        type: PostsActionTypes.SET_POST_PAGE,
        payload: page
    }
}