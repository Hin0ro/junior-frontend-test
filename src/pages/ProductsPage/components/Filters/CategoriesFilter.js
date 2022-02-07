import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addSelectedCategory,
  fetchCategories,
  removeAllSelectedCategories,
  removeSelectedCategory,
} from '../../../../redux/actions/categoryActions'
import styles from './CategoriesFilter.module.scss'

export const CategoriesFilter = () => {
  const dispatch = useDispatch()

  const { categories, selectedCategoryIds } = useSelector(state => state.categories)
  const { loadingCategories } = useSelector(state => state.ui)
  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  const onClickCategory = ({ id }) =>
    dispatch(selectedCategoryIds.indexOf(id) !== -1 ? removeSelectedCategory(id) : addSelectedCategory(id))

  const isActiveCategory = ({ id }) => selectedCategoryIds.indexOf(id) !== -1

  const onClickAllCategories = () => {
    dispatch(removeAllSelectedCategories())
  }

  const isAllCategoriesActive = () => {
    return selectedCategoryIds.length === 0
  }
  return (
    <div>
      <div className={styles.filterCategoriesTitle}>Category</div>
      {loadingCategories ? (
        <p>Loading categories...</p>
      ) : (
        <div className={styles.categoryList}>
          <button
            className={[styles.button, isAllCategoriesActive() ? styles.active : null].join(' ')}
            onClick={() => onClickAllCategories()}
          >
            All
          </button>
          {categories.map(category => {
            return (
              <button
                className={[styles.button, isActiveCategory(category) ? styles.active : null].join(' ')}
                onClick={() => onClickCategory(category)}
                key={category.id}
              >
                {category.name}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
