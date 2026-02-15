function Education({data, onChange}) {
  return (
    <>
    <div className="education">
      <h1>Education</h1>
      <label>School<input type="text" value={data.school} onChange={e => 
        onChange('school', e.target.value)} /> </label>
      <label>Field of Study<input type="text" value={data.fos} onChange={e =>
        onChange('fos', e.target.value)} /> </label>
      <h3>Years of Study</h3>
      <label>Start Date<input type="date" value={data.start} onChange={e => onChange('start', e.target.value)} /> </label>  
      <label>End Date<input type="date" value={data.end} onChange={e => onChange('end', e.target.value)} /> </label>
    </div> 
    </>
  )
}

export default Education