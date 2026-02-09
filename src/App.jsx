import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Practical from './components/Practical.jsx';
import Resume from './components/Resume.jsx';

function App() {

  return (
    <>
    <div className='wrapper'>
      <div className="container">
        <General />
        <Education />
        <Practical />
      </div>
      <div className="resume">
        <Resume name="Anthony"/>
      </div>
    </div>
    </>
  )
}

export default App
