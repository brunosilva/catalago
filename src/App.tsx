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

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Cart />
        <div className="container">
          <div className="sidebar">
            <Options setCategory={setCategory} />
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
