// packages
import React from 'react'

// utils
import { optionsMenu } from './utils'

// style
import style from './style.module.scss'

const Options: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {optionsMenu.map(item => (
          <a href={item.value}>
            <div className={style.menu}>
              <span>{item.text}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Options
