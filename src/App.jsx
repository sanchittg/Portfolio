import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App