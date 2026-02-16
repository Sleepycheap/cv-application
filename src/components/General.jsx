import { useState } from 'react';
import '../styles/About.css';

function General({data, saveData}) {
 
  const [formEdit, setFormEdit] = useState(false);
  const editForm = (e) => {
    setFormEdit(!formEdit);
  } 


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
    editForm()
    console.log(formEdit)
  }


  return (
    <div className="general">
      <h1 className="about">About Me</h1>
      <form onSubmit={save} id="about-form">
        <label>Name<input type="text"  name="name"  /> </label> 
        <label>Email<input type="email" name="email"  /> </label>
        <label>Phone<input type="tel" name="phone"/> </label>
        {/* /* onChange={e => onChange('name', e.target.value)} */ }
        {!formEdit && (
          <button type="submit" className='save-btn'>Save</button>
        )}
        <button type="button" onClick={editForm} className='edit-btn'>Edit</button>
      </form>
    </div>
  )
}

export default General