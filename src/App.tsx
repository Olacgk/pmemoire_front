import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingLayout from './layouts/landingLayout'
import Home from './pages/landing-page/home'
import Login from './pages/landing-page/login'
import DashboardLayout from './layouts/dashboardLayout'
import Expert from './pages/dashboard-pages/expert'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<LandingLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='/dashboard' element={<DashboardLayout/>}>
          <Route path='experts' element={<Expert/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
