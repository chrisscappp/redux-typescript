import { IPost } from "../../models"

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_FAILED = "FETCH_POSTS_FAILED",
    SET_POST_PAGE = "SET_POST_PAGE"
}

export interface IPostState {
    posts: IPost[] | undefined,
    loading: boolean,
    error: string | undefined,
    page: number,
    limit: number
}

interface PostActionFetch {
    type:  PostsActionTypes.FETCH_POSTS
}

interface PostActionFetchSuccess {
    type:  PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: IPost[]
}

interface PostActionFetchFailed {
    type:  PostsActionTypes.FETCH_POSTS_FAILED,
    payload: string
}

interface SetPostPage {
    type:  PostsActionTypes.SET_POST_PAGE,
    payload: number
}

export type PostActionType = PostActionFetch |  PostActionFetchSuccess | PostActionFetchFailed | SetPostPage