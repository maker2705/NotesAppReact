import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  Home  from './components/Home'
import './App.css'
import Profile from './components/Profile'

function App() {


  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={ <Profile/> } />
        </Routes>
      </Router>
  )
}

export default App
