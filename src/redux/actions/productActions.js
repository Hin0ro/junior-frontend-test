import axios from 'axios'

import { ERROR_PRODUCTS, FETCH_PRODUCTS, START_LOADING_PRODUCTS, STOP_LOADING_PRODUCTS } from '../types'

export const fetchProducts = filters => dispatch => {
  dispatch({ type: START_LOADING_PRODUCTS })
  axios
    .get(`/api/product`, { params: filters })
    .then(response => {
      dispatch({ type: FETCH_PRODUCTS, payload: response.data.results })
      dispatch({ type: STOP_LOADING_PRODUCTS })
    })
    .catch(error => {
      dispatch({ type: ERROR_PRODUCTS, payload: error.response.data.message })
      dispatch({ type: STOP_LOADING_PRODUCTS })
    })
}
