// packages
import React, { useEffect, useState } from 'react'

// redux
import { useSelector } from 'react-redux'

// components
import Empty from '../Empty'

// type
import { IProduct } from '../../shared/type'

// products
import {
  cangas,
  broches,
  anel,
  diversos,
  esporte,
  gargantilhas
} from './products'

// style
import style from './style.module.scss'
import CatalogItem from '../CatalogItem'

interface IProps {
  category: string
}

const Products: React.FC<IProps> = ({ category }) => {
  const catalog = useSelector(state => state)
  const [addProduct, setAddProduct] = useState()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    if (category === 'cangas') setProducts(cangas)
    if (category === 'broches') setProducts(broches)
    if (category === 'anel') setProducts(anel)
    if (category === 'diversos') setProducts(diversos)
    if (category === 'esporte') setProducts(esporte)
    if (category === 'gargantilhas') setProducts(gargantilhas)
  }, [category])

  return (
    <div className={style.container}>
      {category !== 'empty' ? (
        <>
          <h1>{category}</h1>
          {!products ? (
            <span className={style.withoutProducts}>
              Categoria sem produtos
            </span>
          ) : (
            <div className={style.content}>
              {products.map(product => (
                <CatalogItem key={product.id} product={product} />
              ))}
            </div>
          )}
        </>
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default Products
