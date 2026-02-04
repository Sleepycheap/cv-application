function Practical() {
  return (
    <>
      <form className='Practial'>
        <h2>Practical Experience</h2>
        <label for="cname">Company Name: </label>
        <input type="text" id="cname" name="cname"></input>
        <label for="title">Job Title: </label>
        <input type="text" id="title" name="title"></input>
        <label for="resp">Main Responsibilties: </label>
        <input type="textArea" id="resp" name="resp"></input>
        <label for="w-from">Worked From: </label>
        <input type="date" id="w-from" name="w-from"></input>
        <label for="w-to">Worked Until: </label>
        <input type="date" id="w-to" name="w-to"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Practical