// packages
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// redux
import { IState } from '../../store'
import { ICartItem } from '../../store/modules/cart/types'

// style
import style from './style.module.scss'

// images
import logo from '../../assets/img/logo.png'
import cartIcon from '../../assets/img/cart.png'
import menuIcon from '../../assets/img/menu.png'

interface IProps {
  setShowCart: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<IProps> = ({ setShowCart }) => {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(cart.length)
  }, [cart])
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.menu}>
          <img src={menuIcon} className={style.hamburguerIcon} alt="logo" />
        </div>
        <img src={logo} className={style.logo} alt="logo" />
        <div className={style.cart}>
          <span onClick={() => setShowCart('containerCart')}>
            <img src={cartIcon} className={style.cartIcon} alt="cart" />
            {quantity}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
