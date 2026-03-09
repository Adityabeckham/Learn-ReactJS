// Tugas Mandiri - Aplikasi Kartu Kontak
// ContactCard: foto, nama, telepon, email, tombol Hubungi
// ContactList: state kontak, tampilkan ContactCard, form tambah kontak

import { useState } from "react";

const PLACEHOLDER_PHOTO = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200";

function ContactCard({ name, phone, email, photo }) {
  return (
    <div className="contact-card">
      <div className="profile-img-container" style={{ width: '80px', height: '80px', marginBottom: '1rem' }}>
        <img src={photo || PLACEHOLDER_PHOTO} alt={name} className="profile-img" />
      </div>
      <h3 className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{name}</h3>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>{phone}</p>
      <p style={{ fontSize: '0.8rem', opacity: 0.6, marginBottom: '1.5rem' }}>{email}</p>
      <button type="button" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', width: '100%' }}>
        Connect
      </button>
    </div>
  );
}

const initialContacts = [
  {
    id: 1,
    name: "Budi Santoso",
    phone: "081234567890",
    email: "budi@email.com",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Ani Wijaya",
    phone: "089876543210",
    email: "ani@email.com",
    photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200"
  },
];

function ContactList() {
  const [contacts, setContacts] = useState(initialContacts);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;
    const newContact = {
      id: Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      photo: `https://i.pravatar.cc/200?u=${Date.now()}`,
    };
    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div className="contact-list">
      <form className="contact-form" onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Nama"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="No Telp"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%' }}>Tambah Kontak</button>
      </form>
      <div className="contact-cards">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            phone={contact.phone}
            email={contact.email}
            photo={contact.photo}
          />
        ))}
      </div>
    </div>
  );
}

function TugasMandiri() {
  return (
    <div className="contact-container">
      <div className="contact-intro text-center mb-4">
        <h1 className="gradient-text">Contact Manager</h1>
        <p className="contact-subtitle text-secondary">Aplikasi Kartu Kontak Modern</p>
      </div>
      <ContactList />
    </div>
  );
}

export default TugasMandiri;
export { ContactCard, ContactList };
