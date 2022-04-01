import React, { useState } from 'react'
import { tokens, categories } from './tokens'
import { menu } from './menu'
import './App.css'

function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <div className="app">
      <div className="menu">
        {menu.map((item) => (
          <div className="menu-item">{item.title}</div>
        ))}
      </div>
      <div className="tokens">
        {tokens.map((item) => (
          <div className="token">{item.name}</div>
        ))}
      </div>
    </div>
  )
}

export default App
