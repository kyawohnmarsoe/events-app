import {combineReducers} from 'redux'
import eventReducer from './event/eventReducer'
import enteryReducer from './entery/enteryReducer'

const rootReducer= combineReducers({
   events:eventReducer,
   enteries:enteryReducer,
})

export default rootReducer
