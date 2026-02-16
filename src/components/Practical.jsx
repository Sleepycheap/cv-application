import { useState } from "react";
import '../styles/Practical.css';

function Practical({data, saveData}) {

  const [formEdit, setFormEdit] = useState(false);
  const editForm = (e) => {
    setFormEdit(!formEdit);
  }

   function save(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const company = formJson.company;
    const title = formJson.title;
    const responsibilities = formJson.responsibilities;
    const from = formJson.from;
    const until = formJson.until;
    saveData('company', company);
    saveData('title', title);
    saveData('responsibilities', responsibilities);
    saveData('from', from);
    saveData('until', until);
   }

  return (
    <div className="practical">
      <h1 className="prac-header">Past Experience</h1>
      <form onSubmit={save} id="prac-form">
        <label>Company<input type="text" name="company" className="inpt-prac" /> </label>
        <label>Title<input type="text" name="title" className="inpt-prac" /> </label>
        <label>Responsibilities<input type="text" name="responsibilities" className="inpt-prac" /> </label>
        <label>Worked From<input type='date' name="from" className="inpt-prac" /> </label>
        <label>Worked until<input type="date" name='until' className="inpt-prac" /> </label>
        {!formEdit && (
          <button type='submit' className="save-prac">Save</button>
        )}
        <button type='button' onClick={editForm} className="edit-prac">Edit</button>
      </form>
    </div>
  )
}

export default Practical