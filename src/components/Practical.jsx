function Practical({data, onChange}) {
  return (
    <div className="practical">
      <h1>Past Experience</h1>
      <label>Company<input type="text" value={data.company} onChange={e => onChange('company', e.target.value)} /> </label>
      <label>Title<input type="text" value={data.title} onChange={e => onChange('title', e.target.value)} /> </label>
      <label>Responsibilities<input type="text" value={data.responsibilities} onChange={e => onChange('responsibilities', e.target.value)} /> </label>
      <label>Worked From<input type='date' value={data.from} onChange={e => onChange('from', e.target.value)} /> </label>
      <label>Worked until<input type="date" value={data.until} onChange={e => onChange('until', e.target.value)} /> </label>
    </div>
  )
}

export default Practical