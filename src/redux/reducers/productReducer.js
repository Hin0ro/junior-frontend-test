import { ERROR_PRODUCTS, FETCH_PRODUCTS } from '../types'

const initialState = {
  products: [],
  product: {},
  errorMessage: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_PRODUCTS:
      return { ...state, products: [...payload], errorMessage: null }
    case ERROR_PRODUCTS:
      return { ...state, errorMessage: payload }
    default:
      return state
  }
}
