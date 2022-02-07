import React from 'react'
import { Filters } from './components/Filters/Filters'
import { Header } from './components/Header'
import { ProductsList } from './components/ProductsList'
import styles from './Products.module.scss'

const Products = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Filters />
      <ProductsList />
    </div>
  )
}

export default Products
