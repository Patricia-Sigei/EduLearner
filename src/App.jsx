import React from 'react'
import Navbar from './Components/NavBar/Navbar.'
import UserLogIn from './Components/LogIn/UserLogIn'
import Home from './Components/Home/Home'
import Assignments from './Components/Assignments/Assignments'
import Lessons from './Components/Lessons/Lessons'
import SideBar from './Components/SideBar/SideBar'
import Resources from './Components/Resources/Resources'

const App = () => {
  return (
    <div> 
      <Navbar/>
      <SideBar/>
      <UserLogIn/>
      <Home/>
      <Lessons/>
      <Assignments/>
      <Resources/>
    </div>
  )
}

export default App
