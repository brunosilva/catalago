// packages
import React from 'react'
import { useSelector } from 'react-redux'

// style
import style from './style.module.scss'

const Cart: React.FC = () => {
  const state = useSelector(state => state)
  console.log('cart', state)
  return (
    <div className={style.container}>
      <h1>cart</h1>
    </div>
  )
}

export default Cart
