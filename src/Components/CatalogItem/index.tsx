// packages
import React, { useCallback } from 'react'

// redux
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../store/modules/cart/actions'

// type
import { IProduct } from '../../shared/type'

// style
import style from './style.module.scss'

interface CatalogItemProps {
  product: IProduct
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product])

  return (
    <div className={style.container}>
      <div className={style.productCard}>
        <img src={product.image} alt="" />
        <span>{product.name}</span>
        <button type="button" onClick={handleAddProductToCart}>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default CatalogItem
