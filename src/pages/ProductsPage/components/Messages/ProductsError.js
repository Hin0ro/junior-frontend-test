import React from 'react'
import styles from './Messages.module.scss'

export const ProductsError = ({ errorMessage, refetch }) => {
  const clickRefetchProducts = () => {
    refetch()
  }
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorText}>
        <h1>SERVER ERROR</h1>
        <h1>SERVER ERROR</h1>
      </div>
      <code>Error: {errorMessage}</code>
      <p>
        Products not loaded
        <span>&#128546;</span>
      </p>
      <button onClick={clickRefetchProducts}>Reload products</button>
    </div>
  )
}
