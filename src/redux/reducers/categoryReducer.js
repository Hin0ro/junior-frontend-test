import {
  ADD_SELECTED_CATEGORY,
  ERROR_CATEGORIES,
  FETCH_CATEGORIES,
  REMOVE_ALL_SELECTED_CATEGORIES,
  REMOVE_SELECTED_CATEGORY,
  SEARCH_CHANGED,
  FILTERS_CLEAR,
  TOGGLE_LIMITED,
  TOGGLE_NEW,
} from '../types'

const initialState = {
  categories: [],
  selectedCategoryIds: [],
  isLimited: false,
  isNew: false,
  search: '',
  errorMessage: null,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, categories: [...payload], errorMessage: null }
    case ADD_SELECTED_CATEGORY:
      return { ...state, selectedCategoryIds: [...state.selectedCategoryIds, payload] }
    case REMOVE_SELECTED_CATEGORY:
      return {
        ...state,
        selectedCategoryIds: state.selectedCategoryIds.filter(categoryId => categoryId != payload),
      }
    case REMOVE_ALL_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategoryIds: [],
      }
    case TOGGLE_LIMITED:
      return {
        ...state,
        isLimited: !state.isLimited,
      }
    case TOGGLE_NEW:
      return {
        ...state,
        isNew: !state.isNew,
      }
    case SEARCH_CHANGED:
      return {
        ...state,
        search: payload,
      }
    case FILTERS_CLEAR:
      return {
        ...state,
        selectedCategoryIds: [],
        isLimited: false,
        isNew: false,
        search: '',
      }
    case ERROR_CATEGORIES:
      return {
        ...state,
        errorMessage: payload,
      }
    default:
      return state
  }
}
