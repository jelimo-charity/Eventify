// import React from 'react'

// import Footer from "../components/Footer"
import Container from "../components/Container"
import Featured from "../components/Featured"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import About from "./About"
// import About from "./About"

const Home = () => {
  return (
   <Container>
      <Navbar />
      <About />
      <Featured />
      <Footer />

   </Container>
  )
}

export default Home
