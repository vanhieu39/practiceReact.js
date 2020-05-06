import status from './Status'
import sort from './Sort'
import {combineReducers} from 'redux'

const myReducer = combineReducers({
    status,
    sort
})
export default myReducer