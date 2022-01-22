// packages
import React, { useCallback } from 'react'

// utils
import { optionsMenu } from './utils'

// style
import style from './style.module.scss'

interface IProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>
}
const Options: React.FC<IProps> = ({ setCategory }) => {
  const handleCategory = useCallback(
    (value: string) => {
      setCategory(value)
    },
    [setCategory]
  )

  return (
    <div className={style.container}>
      <div className={style.content}>
        {optionsMenu.map(item => (
          <button type="button" onClick={() => handleCategory(item.value)}>
            <div className={style.menu}>
              <span>{item.text}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Options
