import './App.css'
 import Player from "./componets1/play1"
import {Routes,Route,Link} from 'react-router-dom'
 import PlayerV from './componets1/player'
import Navbar from './componets1/dashboard'
 import Sidebar from './componets1/sidebar'


function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/" className='li1'>images|</Link></li>
          <li><Link to="/videos" className='li2'>videos</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Player/>}/>
        <Route path='/videos' element={<PlayerV/>}/>
      </Routes>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

export default App
