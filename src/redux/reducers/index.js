import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import uiReducer from './uiReducer'

export default combineReducers({
  products: productReducer,
  categories: categoryReducer,
  ui: uiReducer,
})
