import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'
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
