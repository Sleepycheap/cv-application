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
  const [practical, setPractical] = useState({company: "", title: "", responsibilities: "", from: "", until: ""})
  const handleContact = (field, value) => setContact(prev => ({...prev, [field]: value}))
  const handlePractical = (field, value) => setPractical(prev => ({...prev, [field]: value}))

  return (
    <>
    <div className='wrapper'>
      <div className="container">
        <General data={contact} onChange={handleContact} />
        <Education />
        <Practical data={practical} onChange={handlePractical}/>
      </div>
      <div className="resume">
        <Resume contact={contact} practical={practical}/>
      </div>
    </div>
    </>
  )
}

export default App
