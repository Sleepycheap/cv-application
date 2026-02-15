import React from 'react';
import '../styles/Resume.css'
import { useState } from 'react';
import Practical from './Practical';
// import practical from './Practical';

export default function Resume({contact, education, practical}) {

  return (
    <div className="preview">
      <section className="general">
        <h1>About Me</h1>
        <h2>{contact.name}</h2>
        <div className="contacts">
          <span>{contact.email}</span>
          <br>
          </br>
          <br></br>
          <span>{contact.phone}</span>
        </div>
      </section>
      
      <section className="edu">
        <h1>Education</h1>
        <p>{education.school}</p>
        <p>{education.fos}</p>
        <p>{education.start}</p>
        <p>{education.end}</p>

      </section>

      <section className='body'>
        <h3>Experience</h3>
        <p>{practical.company}</p>
        <p>{practical.title}</p>
        <p>{practical.from}- {practical.until}</p>
        <p>{practical.responsibilities}</p>      
      </section>
    </div>
  )
};