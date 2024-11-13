import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import Team from './pages/Team'
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className='bg-biege h-screen'>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/aboutus" element={<AboutUs />}> </Route>
          <Route path="/events" element={<Events/>}> </Route>
          <Route path="/team" element={< Team/>}>  </Route>
      </Routes>
    </div>
  )
}

export default App
