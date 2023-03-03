import { memo, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const Posts: React.FC = () => {

    const { posts, loading, error, page } = useTypedSelector((({postsReducer}) => postsReducer))
    const { getPosts, setPostPage } = useActions()

    const pages = [1,2,3,4,5]

    useEffect(() => {
        getPosts()
    }, [page])

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }

    console.log(error);

    return (
        <>
            {posts?.map((post, index) => {
                return (
                    <div>
                        <h3>{index + 1}. {post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                )
            })}
            <div style = {{display: 'flex'}}>
                {pages.map((p) => {
                    return (
                        <div
                            onClick = {() => setPostPage(p)}
                            style = {{border: p === page ? '2px solid green' : '2px solid gray', padding: '10px'}}
                        >
                            {p}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default memo(Posts)