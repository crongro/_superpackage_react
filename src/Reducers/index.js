import { combineReducers } from 'redux'
import Counter from './Counter'
import ServerData from './ServerData'

export default combineReducers({
  Counter,
  ServerData
})