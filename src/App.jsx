import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useShortenUrl } from 'react-shorten-url'

function App() {


  return (
    <>
      
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  )
}

export default App
