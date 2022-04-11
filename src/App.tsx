import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { SideBarMenu, TokensContent, Search } from './Components'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBarMenu />
        <Routes>
          <Route path="/" element={<TokensContent />} />
          <Route path="/tokensContent" element={<TokensContent />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
