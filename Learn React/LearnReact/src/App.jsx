import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./Profile.jsx";
import ProductCard from "./ProductCard.jsx";
import TodoList from "./TodoList.jsx";
import Tampilkan from "./PropChildren.jsx";
import Counter from "./UseState.jsx";
import TugasMandiri from "./Contact.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="hero text-center" style={{ padding: '8vw 1rem', position: 'relative' }}>
        <div className="hero-glow" style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '60vw', height: '40vh', background: 'var(--purple)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
        }}></div>
        <div className="app-logos mb-4" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite" style={{ height: '5rem', filter: 'drop-shadow(0 0 2rem var(--cyan))' }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React" style={{ height: '5rem', filter: 'drop-shadow(0 0 2rem var(--purple))' }} />
          </a>
        </div>
        <h1 className="gradient-text" style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', marginBottom: '1rem' }}>
         React Pertemuan 1
        </h1>
        <p className="text-secondary" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem', opacity: 0.8 }}>
          "Semoga aku semangat terus untuk belajar hal baru."
        </p>
        <button className="btn-primary" onClick={() => setCount((c) => c + 1)} style={{ fontSize: '1.1rem', padding: '1.5rem 3rem' }}>
          Dimulai dari: ({count}) Ya.Semangat!
        </button>
      </header >

      <main className="app-container">
        <section className="section">
          <span className="section-title">Latihan 1 Component Profile</span>
          <Profile />
        </section>

        <section className="section">
          <span className="section-title">Latihan 2 Component ProductCard</span>
          <ProductCard
            name="MacBook Pro M3 Max"
            price="Rp 48,999,000"
            image="data:image/jpeg;base64,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"
          />
        </section>

        <section className="section">
          <span className="section-title">Latihan 3 UseState</span>
          <TodoList />
        </section>

        <section className="section">
          <span className="section-title">Identity</span>
          <Tampilkan />
        </section>

        <section className="section">
          <span className="section-title">Use State</span>
          <Counter />
        </section>

        <section className="section">
          <span className="section-title">Challenge Aplikasi Kartu Kontak</span>
          <TugasMandiri />
        </section>
      </main>

      <footer className="footer text-center" style={{ marginTop: '10vh', padding: '4rem', opacity: 0.5 }}>
        <p className="gradient-text" style={{ fontSize: '1rem', letterSpacing: '0.3em' }}>@2026 by Aditya Beckham. Keep Learning and Keep Growing.</p>
      </footer>
    </div >
  );
}

export default App;
