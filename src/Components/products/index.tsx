// packages
import React, { useCallback, useEffect, useState } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { addProductToCart } from '../../store/modules/cart/actions'

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

interface IProps {
  category: string
}

const Products: React.FC<IProps> = ({ category }) => {
  const dispatch = useDispatch()
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

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(addProductToCart(product))
    },
    [dispatch]
  )

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
              {products.map(item => (
                <div className={style.productCard} key={item.id}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                  <button
                    type="button"
                    onClick={() => handleAddProductToCart(item)}
                  >
                    Adicionar ao carrinho
                  </button>
                </div>
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
