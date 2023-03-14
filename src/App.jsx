import React from 'react'
import AboutMe from './components/aboutMe'
import Footer from './components/footer'
import Header from './components/header'
import { Presentations } from './components/imagePresentation'
import Projects from './components/projects'
import Skills from './components/skills'

import './index.css'
function App() {
  return (
    <>
      <Header />
      <Presentations />
      <Projects />
      <AboutMe />
      <Skills />
      <Footer />
    </>
  )
}

export default App
