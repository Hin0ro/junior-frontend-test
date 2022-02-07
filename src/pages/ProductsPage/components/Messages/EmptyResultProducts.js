import { useDispatch } from 'react-redux'
import { clearSearchAndFilters } from '../../../../redux/actions/categoryActions'
import styles from './Messages.module.scss'

export const EmptyResultProducts = () => {
  const dispatch = useDispatch()
  const clickClearSearchAndFilters = () => {
    dispatch(clearSearchAndFilters())
  }
  return (
    <div className={styles.errorContainer}>
      <p>
        No products found
        <span>&#128546;</span>
      </p>
      <button onClick={clickClearSearchAndFilters}>Clear search and filters</button>
    </div>
  )
}
