import React from 'react';
import '../styles/Resume.css'
import { useState } from 'react';

export default function Resume() {
  const [contact, setContact] = useState({name: "Anthony", email: "email@email.com", phone: "555-555-5555"});

  return (
    <div className="preview">
      <header className="header">
        <h2>{contact.name}</h2>
        <div className="contacts">
          <span>{contact.email}</span>
          <br>
          </br>
          <br></br>
          <span>{contact.phone}</span>
        </div>
      </header>
      
      <section classname="edu">
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