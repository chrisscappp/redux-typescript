import * as UserActionCreators from './usersAction'
import * as TodoActionCreators from './todosAction'
import * as PostsActionCreators from './postsAction'

export default {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...PostsActionCreators
}

/*
    сосредоточили все action creators в одном. 
    теперь среда сама подставляет куда надо нужный экшн 
*/