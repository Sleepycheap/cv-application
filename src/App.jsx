import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import General from './components/General.jsx';
import Education from './components/Education.jsx';
import Practical from './components/Practical.jsx';
import Resume from './components/Resume.jsx';

function App() {
  const [contact, setContact] = useState({name: "", email: "", phone: ""})
  const [education, setEducation] = useState({school: "", fos: "", start: "", end: ""})
  const [practical, setPractical] = useState({company: "", title: "", responsibilities: "", from: "", until: ""})
  const handleContact = (field, value) => setContact(prev => ({...prev, [field]: value}))
  const handleEducation = (field, value) => setEducation(prev => ({...prev, [field]: value}))
  const handlePractical = (field, value) => setPractical(prev => ({...prev, [field]: value}))

  // const handleClick = 

  return (
    <>
    <div className='wrapper'>
      <div className="container">
        <General data={contact} saveData={handleContact} />
        <Education data={education} onChange={handleEducation}/>
        <Practical data={practical} onChange={handlePractical}/>
      </div>
      <div className="resume">
        <Resume contact={contact} education={education} practical={practical}/>
      </div>
    </div>
    </>
  )
}

export default App
