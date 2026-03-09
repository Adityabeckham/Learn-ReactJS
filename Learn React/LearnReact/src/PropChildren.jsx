function Identitas({ name, age, address }) {
  return (
    <div className="identitas-content text-center">
      <h1 className="gradient-text mb-4">Identity Details</h1>
      <p><strong>Nama:</strong> {name}</p>
      <p><strong>Umur:</strong> {age} Tahun</p>
      <p><strong>Alamat:</strong> {address}</p>
    </div>
  )
}

function Tampilkan() {
  return (
    <Identitas
      name="Undefined"
      age={null}
      address="Unknown"
    />
  )
}
export default Tampilkan;