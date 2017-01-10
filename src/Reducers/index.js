import { combineReducers } from 'redux'
import CardList from './CardList'
import SaveMyCard from './SaveMyCard'
import Login from './Login'

export default combineReducers({
  CardList,
  SaveMyCard,
  Login
})