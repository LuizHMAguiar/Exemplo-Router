import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import  Home from './pages/Home'
import  Contato from './pages/Contato'
import  Sobre from './pages/Sobre'


function App() {
  
  return (
    <Router>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/contato' element={<Contato />}/>
      </Routes>
    </Router>
  )
}

export default App
