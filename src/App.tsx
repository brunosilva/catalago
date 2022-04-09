// packages
import React, { useState } from 'react'
import { Provider } from 'react-redux'

// redux
import store from './store'

// components
import Header from './Components/Header'
import Options from './Components/Options'
import Products from './Components/Products'

// style
import '../src/style/global.scss'
import Cart from './Components/Cart'

function App() {
  const [category, setCategory] = useState('empty')
  const [showCart, setShowCart] = useState('dnone')

  return (
    <Provider store={store}>
      <div className="App">
        <Cart setShowCart={setShowCart} showCart={showCart} />
        <Header setShowCart={setShowCart} />
        <div className="mobile">
          <Options setCategory={setCategory} />
        </div>
        <div className="container">
          <div className="sidebar">
            <div className="desktop">
              <Options setCategory={setCategory} />
            </div>
          </div>
          <div className="content">
            <Products category={category} />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
