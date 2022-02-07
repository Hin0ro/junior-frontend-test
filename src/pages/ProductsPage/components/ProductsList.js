import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ProductsList.module.scss'
import canola from './images/Canola@2x.png'
import barley from './images/Barley@2x.png'
import corn from './images/Corn@2x.png'
import oats from './images/Oats@2x.png'
import soybeans from './images/Soybeans@2x.png'
import wheat from './images/Wheat@2x.png'
import { fetchProducts } from '../../../redux/actions/productActions'
import { EmptyResultProducts } from './Messages/EmptyResultProducts'
import Loader from './Loader'
import { ProductsError } from './Messages/ProductsError'

export const ProductsList = () => {
  const dispatch = useDispatch()

  const { products, errorMessage } = useSelector(state => state.products)
  const { loadingProducts } = useSelector(state => state.ui)
  const { selectedCategoryIds, isLimited, isNew, search } = useSelector(state => state.categories)

  const getProducts = useCallback(() => {
    dispatch(fetchProducts({ category: selectedCategoryIds, isLimited, isNew, search }))
  }, [dispatch, selectedCategoryIds, isLimited, isNew, search])

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const getCategoryImageSrc = ({ categoryName }) => {
    if (categoryName === 'Canola') {
      return canola
    } else if (categoryName === 'Barley') {
      return barley
    } else if (categoryName === 'Corn') {
      return corn
    } else if (categoryName === 'Wheat') {
      return wheat
    } else if (categoryName === 'Oats') {
      return oats
    } else if (categoryName === 'Soybeans') {
      return soybeans
    }
  }

  const getDiscountString = ({ discount }) => {
    if (discount !== null) {
      return `Discount $${discount} per bag`
    } else {
      return ''
    }
  }

  if (loadingProducts) {
    return <Loader loaderText={'Products loading...'} />
  }

  if (errorMessage) {
    return <ProductsError errorMessage={errorMessage} refetch={getProducts} />
  }

  if (!products.length) {
    return <EmptyResultProducts />
  }

  return (
    <>
      <div className={styles.listCantainer}>
        {products.map(product => {
          return (
            <section className={styles.productCard} key={product.id}>
              <img className={styles.image} src={getCategoryImageSrc(product)} alt={product.categoryName} />
              <div className={styles.textSection}>
                <p className={styles.categoryName}>{product.categoryName}</p>
                <p className={styles.productName}>{product.name}</p>
                <p className={styles.productDesc}>{product.description}</p>
                <p className={styles.productPrice}>
                  {'$' + product.price}
                  <span>{getDiscountString(product)}</span>
                </p>
              </div>
              <div className={styles.statusContainer}>
                {product.isLimited && <div className={styles.limited}>Limited</div>}
                {product.isNew && <div className={styles.new}>New</div>}
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
