import React from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <header>
        <Header />
      </header>
      <body>
        <AboutMe />
        <Projects />
        <Contact />
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
