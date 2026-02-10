import React from 'react';
import '../styles/Resume.css'
import { useState } from 'react';
import Practical from './Practical';
// import practical from './Practical';

export default function Resume({contact, practical}) {

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
        <p>{practical.company}</p>
        <p>{practical.title}</p>
        <p>{practical.from}- {practical.until}</p>
        <p>{practical.responsibilities}</p>      
      </section>
    </div>
  )
};