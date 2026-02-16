import React from 'react';
import '../styles/Resume.css'
import { useState } from 'react';
import Practical from './Practical';
// import practical from './Practical';

export default function Resume({contact, education, practical}) {

  return (
    <div className="preview">
      <section className="general-cv">
        <h1 className='about-header'>About Me</h1>
        <p>Name: {contact.name}</p>
        <div className="contacts">
          <span>Email: {contact.email}</span>
          <br>
          </br>
          <br></br>
          <span>Phone: {contact.phone}</span>
        </div>
      </section>

      {/* <section className='section-break'></section> */}
      
      <section className="edu-cv">
        <h1 className='edu-header'>Education</h1>
        <div className='school-details'>
          <p>School: {education.school}</p>
          <p>Field of Study: {education.fos}</p>
          <p>Start date:{education.start}</p>
          <p>End date: {education.end}</p>
        </div>
      </section>

      <section className='prac'>
        <h1 className='prac-header'>Experience</h1>
        <p>Company: {practical.company}</p>
        <p>Title: {practical.title}</p>
        <p>Worked From/Until: {practical.from} - {practical.until}</p>
        <p>Responsibilities: {practical.responsibilities}</p>      
      </section>
    </div>
  )
};