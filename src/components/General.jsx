
function General() {
  return (
    <>
    <h1>Resume Maker</h1>
    <form className='personal'>
      <h2>Personal Information</h2>
      <label for="fname">First Name: </label>
      <input type="text" id="fname" name="fname"></input>
      <label for="lname">Last Name: </label>
      <input type="text" id="lname" name="lname"></input>
      <label for="emailAddress">Email Address: </label>
      <input type="email" id="emailAddress" name="emailAddress"></input>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default General