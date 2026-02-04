function Education() {
  return (
    <>
    <form className="education">
      <h2>Eduction Experience</h2>
      <label for="school-name">School Name: </label>
      <input type="text" id="school-name" name="school-name"></input>
      <label for="fos">Field of Study</label>
      <input type="text" id="fos" name="fos"></input>
      <label for="dos">Date of Study: </label>
      <input type="date" id="dos" name="dos"></input>
      <button type="submit">Submit</button>
    </form> 
    </>
  )
}

export default Education