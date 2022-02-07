import React from 'react'
import { CategoriesFilter } from './CategoriesFilter'
import { StatusFilter } from './StatusFilter'
import styles from './Filters.module.scss'
import { ReactComponent as FiltersLogo } from '../icons/Filters.svg'
import { useSelector } from 'react-redux'
import { FiltersError } from '../Messages/FiltersError'

export const Filters = () => {
  const { errorMessage } = useSelector(state => state.categories)

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filterTitle}>
        <FiltersLogo />
        <h3>Filters</h3>
      </div>
      {errorMessage ? (
        <FiltersError errorMessage={errorMessage} />
      ) : (
        <div className={styles.filtersSection}>
          <CategoriesFilter />
          <StatusFilter />
        </div>
      )}
    </div>
  )
}
