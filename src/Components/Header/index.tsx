// packages
import React from 'react'

// style
import style from './style.module.scss'

// images
import logo from '../../assets/img/logo.png'

const Header: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={logo} className={style.logo} alt="logo" />
        <div className={style.cart}>
          <span>cart</span>
        </div>
      </div>
    </div>
  )
}

export default Header
