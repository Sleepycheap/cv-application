import { useState } from "react";
import '../styles/Education.css';

function Education({data, saveData}) {
  const [formEdit, setFormEdit] = useState(false);
  const editForm = (e) => {
    setFormEdit(!formEdit);
  }

  function save(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const school = formJson.school;
    const fos = formJson.fos;
    const start = formJson.start;
    const end = formJson.end;
    saveData('school', school);
    saveData('fos', fos);
    saveData('start', start);
    saveData('end', end);
    editForm();
    console.log(formEdit);
  }

  return (
    <>
    <div className="education">
      <h1 className="edu">Education</h1>
      <form onSubmit={save} id="edu-form">
        <label>School<input type="text" name="school" className="inpt-edu" /> </label>
        <label>Field of Study<input type="text" name="fos" className="inpt-edu"/> </label>
        <h3>Years of Study</h3>
        <label>Start Date<input type="date" name="start" className="inpt-edu"/> </label>  
        <label>End Date<input type="date" name="end" className="inpt-edu"/> </label>
        {!formEdit && (
          <button type='submit' className='save-edu'>Save</button>
        )}
        <button type="button" onClick={editForm} className="edit-edu">Edit</button>
      </form>
    </div> 
    </>
  )
}

export default Education