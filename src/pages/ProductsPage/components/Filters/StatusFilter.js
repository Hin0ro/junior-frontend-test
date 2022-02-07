import { useDispatch, useSelector } from 'react-redux'
import { toggleLimited, toggleNew } from '../../../../redux/actions/categoryActions'
import styles from './StatusFilter.module.scss'
import Checkbox from './Checkbox'

export const StatusFilter = () => {
  const { isLimited, isNew } = useSelector(state => state.categories)
  const dispatch = useDispatch()

  const isLimetedChanged = () => {
    dispatch(toggleLimited())
  }

  const isNewChanged = () => {
    dispatch(toggleNew())
  }

  return (
    <div>
      <div className={styles.statusTitle}>Status</div>
      <div className={styles.checkboxContainer}>
        <label>
          <Checkbox checked={isLimited} onChange={isLimetedChanged} />
          <span>Limited</span>
        </label>
        <label>
          <Checkbox checked={isNew} onChange={isNewChanged} />
          <span>New</span>
        </label>
      </div>
    </div>
  )
}
