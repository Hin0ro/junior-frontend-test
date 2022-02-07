import axios from 'axios'

import {
  ADD_SELECTED_CATEGORY,
  ERROR_CATEGORIES,
  FETCH_CATEGORIES,
  REMOVE_ALL_SELECTED_CATEGORIES,
  REMOVE_SELECTED_CATEGORY,
  SEARCH_CHANGED,
  FILTERS_CLEAR,
  START_LOADING_CATEGORIES,
  STOP_LOADING_CATEGORIES,
  TOGGLE_LIMITED,
  TOGGLE_NEW,
} from '../types'

export const fetchCategories = () => dispatch => {
  dispatch({ type: START_LOADING_CATEGORIES })
  axios
    .get(`/api/category`)
    .then(response => {
      dispatch({ type: FETCH_CATEGORIES, payload: response.data })
      dispatch({ type: STOP_LOADING_CATEGORIES })
    })
    .catch(error => {
      dispatch({ type: ERROR_CATEGORIES, payload: error.response.data.message })
      dispatch({ type: STOP_LOADING_CATEGORIES })
    })
}

export const addSelectedCategory = categoryId => dispatch => {
  dispatch({ type: ADD_SELECTED_CATEGORY, payload: categoryId })
}

export const removeSelectedCategory = categoryId => dispatch => {
  dispatch({ type: REMOVE_SELECTED_CATEGORY, payload: categoryId })
}

export const removeAllSelectedCategories = () => dispatch => {
  dispatch({ type: REMOVE_ALL_SELECTED_CATEGORIES })
}

export const toggleLimited = () => dispatch => {
  dispatch({ type: TOGGLE_LIMITED })
}

export const toggleNew = () => dispatch => {
  dispatch({ type: TOGGLE_NEW })
}

export const searchChanged = searchString => dispatch => {
  dispatch({ type: SEARCH_CHANGED, payload: searchString })
}

export const clearSearchAndFilters = () => dispatch => {
  dispatch({ type: FILTERS_CLEAR })
}
