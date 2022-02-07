import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchChanged } from '../../../redux/actions/categoryActions'
import styles from './Header.module.scss'
import { ReactComponent as SearchIcon } from './icons/Search.svg'

export const Header = () => {
  const dispatch = useDispatch()
  const { search } = useSelector(state => state.categories)
  const [searchString, setSearchString] = useState('')

  const onSearchChanged = ({ target: { value } }) => {
    setSearchString(value)
  }
  // Костыль, который можно избежать, если делать фетч после ввода каждого символа
  useEffect(() => {
    if (!search) setSearchString('')
  }, [search])

  useEffect(() => {
    const timeOutId = setTimeout(() => dispatch(searchChanged(searchString)), 500)
    return () => clearTimeout(timeOutId)
  }, [dispatch, searchString])

  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Products</h1>
        <div className={styles.wrapper}>
          <SearchIcon className={styles.icon} />
          <input
            className={styles.inputSearch}
            value={searchString}
            onChange={onSearchChanged}
            type="text"
            placeholder="Search among products"
          />
        </div>
      </div>
    </>
  )
}
