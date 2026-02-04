import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Practical from './components/Practical.jsx';

function App() {

  return (
    <>
    <div className="container">
      <General />
      <Education />
      <Practical />
    </div>
    </>
  )
}

export default App
