// packages
import React, { useState, useEffect } from 'react'
import { api } from '../../services/api'

// style
import style from './style.module.scss'

interface IProduct {
  id: string
  category: string
  name: string
  description: string
  image: string
}

interface IProps {
  category: string
}
const Products: React.FC<IProps> = ({ category }) => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    api.get<IProduct[]>(`/${category}`).then(response => {
      setProducts(response.data)
    })
  }, [category])
  return (
    <div className={style.container}>
      <div className={style.content}>
        {products.map(item => (
          <a href={item.id}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Products
