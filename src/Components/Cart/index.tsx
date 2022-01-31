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
      <div className={style.header}>
        <span>Produtos no Carrinho</span>
        <span>{'[ x ]'}</span>
      </div>
      <div className={style.productList}>
        <div className={style.productListHeader}>
          <div className={style.img}></div>
          <div className={style.description}>
            <div className={style.name}>
              <small>Produto</small>
            </div>
            <div className={style.category}>
              <small>Categoria</small>
            </div>
          </div>
        </div>
        <div className={style.list}>
          {cart.map(item => (
            <div className={style.item} key={item.product.id}>
              <img
                src={item.product.image}
                className={style.image}
                title={item.product.name}
              />
              <div className={style.description}>
                <div className={style.name}>
                  <strong>{item.product.name}</strong>
                </div>
                <div className={style.category}>
                  <strong>{item.product.category}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.send}>
          <button>ENVIAR PARA WHATSAPP</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
