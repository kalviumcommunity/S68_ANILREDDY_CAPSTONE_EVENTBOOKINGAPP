import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import './Pages/Home.css'
import Login from './component/Login'
import Signup from '../../../../Signup'

function App() {
  return (
    <div className='containers'>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </div>
  )
}

export default App
