import React, { useState } from 'react'
import Header from './Components/Header'
import '../src/style/global.scss'
import Options from './Components/Options'
import Products from './Components/products'

function App() {
  const [category, setCategory] = useState('')

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="sidebar">
          <Options setCategory={setCategory} />
        </div>
        <div className="content">
          <Products category="cangas" />
        </div>
      </div>
    </div>
  )
}

export default App
