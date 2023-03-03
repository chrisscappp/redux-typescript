import { memo, useEffect } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'
import { getUsers } from '../redux/actions/usersAction'

const UsersList: React.FC = () => {

    const { users, loading, error } = useTypedSelector((({usersReducer}) => usersReducer))
    const { getUsers } = useActions()


    useEffect(() => {
        getUsers()
    }, [])
    
    if (loading) {
        return <h3>Loading...</h3>
    }

    if (error) {
        return <h3>{error}</h3>
    }
    
    return (
        <>
            <div>
                {users?.map((user) => {
                    return (
                        <div key = {user.id}>
                            {user.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default memo(UsersList)