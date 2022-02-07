import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchCategories } from '../../../../redux/actions/categoryActions'
import styles from './Messages.module.scss'

export const FiltersError = ({ errorMessage }) => {
  const dispatch = useDispatch()
  const clickRefetchCategories = () => {
    dispatch(fetchCategories())
  }
  return (
    <div className={styles.errorContainer}>
      <code>Error: {errorMessage}</code>
      <p>
        Categories not loaded
        <span>&#128546;</span>
      </p>
      <button onClick={clickRefetchCategories}>Reload categories</button>
    </div>
  )
}
