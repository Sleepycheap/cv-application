import React from 'react';
import '../styles/Resume.css'

export default function Resume() {
  return (
    <div className="preview">
      <header className="header">
        <h2>Your Name</h2>
        <div className="contacts">
          <span>Email</span>
          <br>
          </br>
          <br></br>
          <span>Phone</span>
        </div>
      </header>
      
      <section classname="body">
        <h3>Education</h3>
        <p>
          Degree
          <br>
          </br>
          <br></br>
          School
        </p>
        <p>Date</p>
      </section>

      <section className='body'>
        <h3>Experience</h3>
        <p>
          <strong>Position</strong>
          <p>Company</p>
        </p>
        <p>Start - End</p>
        <p>Responsibilities</p>      
      </section>
    </div>
  )
};