import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import { api } from '../src/services/api'
import '../src/style/global.scss'
import Options from './Components/Options'
import Products from './Components/Products'
import { IProduct } from './shared/type'

function App() {
  const [category, setCategory] = useState('empty')
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    api.get<IProduct[]>(`/${category}`).then(response => {
      setProducts(response.data)
    })
  }, [category])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="sidebar">
          <Options setCategory={setCategory} />
        </div>
        <div className="content">
          <Products category={category} products={products} />
        </div>
      </div>
    </div>
  )
}

export default App
