import { memo, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const TodosList: React.FC = () => {

    const {todos, loading, error, page, limit} = useTypedSelector((({todoReducer}) => todoReducer))
    const {getTodos, setTodoPage} = useActions()

    const pages = [1,2,3,4,5]

    useEffect(() => {
        getTodos()
    }, [page])

    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }

    return (
        <>
            <div>
                {todos?.map((todo) => {
                    return (
                        <div key = {todo.id}>
                            {todo.id} - {todo.title}
                        </div>
                    )
                })}
            </div>
            <div style = {{display: 'flex'}}>
                {pages.map((p) => {
                    return (
                        <div
                            onClick = {() => setTodoPage(p)}
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

export default memo(TodosList)