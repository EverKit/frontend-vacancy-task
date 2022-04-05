import React, { useState, useEffect } from 'react'
import { tokens, categories } from './tokens'
import './App.css'
import SideBarMenu from './SideBarMenu'

function App() {
  const [category, setCategory] = useState(categories[0])

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        'https://ton-swap-indexer.broxus.com/v1/currencies/0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        },
      )
      const data = await res.json()

      console.log(data)
    }
    getData()
    async function lol() {
      const res = await fetch(
        'https://ton-swap-indexer.broxus.com/v1/currencies/0:a49cd4e158a9a15555e624759e2e4e766d22600b7800d891e46f9291f044a93d',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
        },
      )
      const data = await res.json()

      console.log(data)
    }
    lol()
  }, [])

  
  return (
    <div className="app">
      <SideBarMenu />
      <ul className="tokens">
        {tokens.map((item) => (
          <li className="token">
              <li>
                <img src={item.logoURI} />
              </li>
              <li>{item.name}</li>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
