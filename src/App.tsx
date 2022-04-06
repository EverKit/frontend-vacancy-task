import React, { useState } from 'react'
import { categories } from './tokens'
import './App.css'
import { Token } from './Token/Token'
import Menu from './Menu/Menu'

function App() {
  const [category, setCategory] = useState(categories[0])

  return (
    <div className="app">
      <Menu/>
      <Token/>
    </div>
  )
}

export default App
