// packages
import React, { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

// style
import style from './style.module.scss'

const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  const handleSubmit = useCallback(
    async (values: any) => {
      const cartItems = cart.map(item => {
        return `%0A ${item.product.id} `
      })

      const url = `https://api.whatsapp.com/send?phone=5516992640926&text= Orçamento de Produtos -->> %0A Produtos? %0A ${cartItems} `

      window.open(url)
    },
    [cart]
  )
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

        {cart.length > 0 && (
          <div className={style.form}>
            <form
              onSubmit={handleSubmit as React.FormEventHandler<HTMLFormElement>}
            >
              {/* <div>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" />
            </div>
            <div>
              <label htmlFor="cell">Celular</label>
              <input type="text" name="cell" />
            </div> */}
              <div className={style.send}>
                <button>ENVIAR PARA WHATSAPP</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
