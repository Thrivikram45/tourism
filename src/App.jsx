import React from 'react'
import Image from './components/Image'
import {Route, Routes} from 'react-router-dom'
import TripPlanner from './components/TripPlanner'
import TripDetails from './components/TripDetails'
import Destinations from './components/Destinations'
import Login from './components/Login'
import More from './components/More'
import Feedback from './components/Feedback'
import Contactp from './components/Contactp'
import Aboutp from './components/Aboutp'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Image />}/>
        <Route path='/tripplanner' element={<TripPlanner />}/>
        <Route path='/tripdetails' element={<TripDetails />}/>
        <Route path='/destinations' element={<Destinations />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/more' element={<More />}/>
        <Route path='/more/about' element={<Aboutp/>}/>
        <Route path='/more/contact' element={<Contactp />}/>
        <Route path='/more/feedback' element={<Feedback />}/>
        <Route path='/login/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  )
}

export default App