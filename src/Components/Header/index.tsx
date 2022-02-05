// packages
import React from 'react'

// style
import style from './style.module.scss'

// images
import logo from '../../assets/img/logo.png'

interface IProps {
  setShowCart: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<IProps> = ({ setShowCart }) => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <img src={logo} className={style.logo} alt="logo" />
        <div className={style.cart}>
          <span onClick={() => setShowCart('containerCart')}>cart</span>
        </div>
      </div>
    </div>
  )
}

export default Header
