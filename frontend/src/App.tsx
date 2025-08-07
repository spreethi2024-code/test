import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-title">Full-Stack Monorepo</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/items" className="nav-link">Items</Link>
          </div>
        </div>
      </nav>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
