// packages
import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

// style
import style from './style.module.scss'
import { formType } from './type'

interface IProps {
  setShowCart: React.Dispatch<React.SetStateAction<string>>
  showCart: string
}

const Cart: React.FC<IProps> = ({ setShowCart, showCart }) => {
  const [styleCart, setStyleCart] = useState('')
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  useEffect(() => {
    showCart === 'dnone'
      ? setStyleCart(`${style.containerCart} ${style.dnone}`)
      : setStyleCart(`${style.containerCart}`)
  }, [showCart])

  const handleSubmit = useCallback(
    async (values: formType) => {
      const cartItems = cart.map(item => {
        return `%0A *${item.product.id}* `
      })

      const url = `https://api.whatsapp.com/send?phone=5516992640926&text= %0AOlá *${values.name}*, tudo bem? %0ARecebemos seu contato em breve retornaremos. %0A %0AContatos:  %0A*${values.email}*,%0A*${values.cell}* %0A %0AProdutos? ${cartItems} `

      window.open(url)
    },
    [cart]
  )
  return (
    <div className={styleCart}>
      <div className={style.header}>
        <span>Produtos no Carrinho</span>
        <span onClick={() => setShowCart('dnone')}>{'[ x ]'}</span>
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
              onSubmit={event => {
                event.preventDefault()
                const formData = new FormData(event.currentTarget)

                const formattedValue = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  cell: formData.get('cell')
                }

                handleSubmit(formattedValue as formType)
              }}
            >
              <div>
                <label htmlFor="name">Nome *</label>
                <input type="text" name="name" />
              </div>
              <div>
                <label htmlFor="cell">Celular</label>
                <input type="text" name="cell" />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input type="text" name="email" />
              </div>
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
