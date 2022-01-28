// packages
import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

// style
import style from './style.module.scss'

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
  return (
    <div className={style.container}>
      <h1>cart</h1>
      <div className={style.productList}>
        {cart.map(item => (
          <div key={item.product.id}>
            <strong>{item.product.id}</strong>
            <strong>{item.product.name}</strong>
            <span>{item.product.category}</span>
            <span>{item.quantity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart
