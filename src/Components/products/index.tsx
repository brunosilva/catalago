// packages
import React, { useCallback, useState } from 'react'
import { IProduct } from '../../shared/type'
import Empty from '../Empty'

// style
import style from './style.module.scss'

interface IProps {
  category: string
  products: IProduct[]
}

const Products: React.FC<IProps> = ({ category, products }) => {
  const [addProduct, setAddProduct] = useState()

  const handleProduct = useCallback((value: string) => {
    console.log('value product', value)
  }, [])
  return (
    <div className={style.container}>
      {category !== 'empty' ? (
        <>
          <h1>{category}</h1>
          {!products ? (
            <span className={style.withoutProducts}>
              Categoria sem produtos
            </span>
          ) : (
            <div className={style.content}>
              {products.map(item => (
                <button type="button" onClick={() => handleProduct(item.id)}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <Empty />
      )}
    </div>
  )
}

export default Products
