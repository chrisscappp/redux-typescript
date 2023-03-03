import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '../redux/actions/index'

export const useActions = () => {
    const dispatch: any = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
} // хук, который оборачивает actions в диспатч. избегаем лишних импортов.