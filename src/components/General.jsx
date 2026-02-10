
function General({data, onChange}) {
  return (
    <div className="general">
      <label>Name<input type="text" value={data.name} onChange=
      {e => onChange('name', e.target.value)} /> </label>
      <label>Email<input type="email" value={data.email} onChange=
      {e => onChange('email', e.target.value)} /> </label>
      <label>Phone<input type="tel" value={data.phone} onChange=
      {e => onChange('phone', e.target.value)} /> </label>
    </div>
  )
}

export default General