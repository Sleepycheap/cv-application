import { useState } from 'react';
import '../styles/About.css';

function General({data, saveData}) {
  // const [contact, setContact] = useState({name: "", email: "", phone: ""})
  
  function save(e) {
    e.preventDefault();
    const form = e.target
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.name;
    const email = formJson.email;
    const phone = formJson.phone;
    saveData('name', name);
    saveData('email', email);
    saveData('phone', phone);
    console.log(name);
    // const name = target.name.value;
    // const email = target.email.value;
    // const phone = target.phone.value;
    // onSubmit={name => onSubmit('name', name)}
    // setContact(newContact)
  }


  return (
    <div className="general">
      <h1 className="about">About Me</h1>
      <form onSubmit={save} id="about-form">
        <label>Name<input type="text"  name="name"  /> </label> 
        <label>Email<input type="email" name="email"  /> </label>
        <label>Phone<input type="tel" name="phone"/> </label>
        {/* /* onChange={e => onChange('name', e.target.value)} */ }
        <button type="submit" >Save</button>
      </form>
    </div>
  )
}

export default General