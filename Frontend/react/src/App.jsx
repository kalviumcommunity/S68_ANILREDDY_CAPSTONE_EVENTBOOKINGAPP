import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './Pages/Home.css'

function App() {
  return (
    <div className='containers'>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default App
