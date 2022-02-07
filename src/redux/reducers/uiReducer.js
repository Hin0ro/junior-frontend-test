import {
  START_LOADING_PRODUCTS,
  STOP_LOADING_PRODUCTS,
  START_LOADING_CATEGORIES,
  STOP_LOADING_CATEGORIES,
} from '../types'

const initialState = {
  loadingProducts: true,
  loadingCategories: false,
}

export default function(state = initialState, action) {
  const { type } = action
  switch (type) {
    case START_LOADING_PRODUCTS:
      return { ...state, loadingProducts: true }
    case STOP_LOADING_PRODUCTS:
      return { ...state, loadingProducts: false }
    case START_LOADING_CATEGORIES:
      return { ...state, loadingCategories: true }
    case STOP_LOADING_CATEGORIES:
      return { ...state, loadingCategories: false }
    default:
      return state
  }
}
