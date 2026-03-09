import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventHandler from './components/EventHandler.jsx'
import DaftarBuah from './components/EventArgument.jsx'
import FormInput from './components/EventObject.jsx'

// Import new components
import FormLogin from './components/FormLogin.jsx'
import ConditionalRendering from './components/ConditionalRendering.jsx'
import ListAndKeys from './components/ListAndKeys.jsx'
import UseEffectExamples from './components/UseEffectExamples.jsx'
import StylingExamples from './components/StylingExamples.jsx'

import Kalkulator from './latihan/Kalkulator.jsx'
import HasilUjian from './latihan/HasilUjian.jsx'
import TodoList from './latihan/TodoList.jsx'
import DaftarPost from './latihan/DaftarPost.jsx'
import MovieApp from './tugas/MovieApp.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #d946ef, #8b5cf6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 0 30px rgba(217, 70, 239, 0.4)',
          margin: '20px 0',
          lineHeight: '1.2'
        }}>
          React Pertemuan 2
        </h1>
      </div>

      <div className="sections-grid">
        <section className="section-card">
          <h2>1. Event Handling</h2>
          <EventHandler />
          <hr style={{ margin: '20px 0' }} />
          <DaftarBuah />
          <hr style={{ margin: '20px 0' }} />
          <FormInput />
          <hr style={{ margin: '20px 0' }} />
          <FormLogin />
        </section>

        <section className="section-card">
          <h2>2. Conditional Rendering</h2>
          <ConditionalRendering />
        </section>

        <section className="section-card">
          <h2>3. List & Keys</h2>
          <ListAndKeys />
        </section>

        <section className="section-card">
          <h2>4. useEffect Hook</h2>
          <UseEffectExamples />
        </section>

        <section className="section-card">
          <h2>5. Styling di React</h2>
          <StylingExamples />
        </section>

        <section className="section-card">
          <h2>6. Latihan</h2>
          <Kalkulator />
          <hr style={{ margin: '20px 0' }} />
          <HasilUjian />
          <hr style={{ margin: '20px 0' }} />
          <TodoList />
          <hr style={{ margin: '20px 0' }} />
          <DaftarPost />
        </section>

        <section className="section-card">
          <h2>7. Tugas Mandiri</h2>
          <MovieApp />
        </section>
      </div>

    </div>
  )
}

export default App
