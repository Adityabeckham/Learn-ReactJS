import profileImg from "./assets/foto.jpg";

function Profile() {
  const name = "ADITYA BECKHAM";

  return (
    <div className="profile-card">
      <div className="profile-img-container">
        <img src={profileImg} alt="Aditya Beckham" className="profile-img" />
      </div>
      <div className="profile-info">
        <h1 className="glitch gradient-text" data-text={name}>
          {name}
        </h1>
        <p className="section-title" style={{ justifyContent: 'center', marginBottom: '0.5rem' }}>Frontend Developer</p>
        <p style={{ fontStyle: 'italic', opacity: 0.7 }}>"Building the future of the web, one frame at a time."</p>
      </div>
    </div>
  );
}

export default Profile;
