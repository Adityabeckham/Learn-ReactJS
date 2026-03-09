import { useState } from 'react';
import './Tombol.css';
import './styles.css';

function KotakWarna() {
    const gaya = {
        backgroundColor: '#4f46e5',
        color: 'white',
        padding: '16px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '10px',
    };

    return <div style={gaya}>Kotak Ungu (Inline Style)</div>;
}

function Tombol({ label }) {
    return <button className="tombol-utama" style={{ marginBottom: '10px' }}>{label}</button>;
}

function ToggleTema() {
    const [gelap, setGelap] = useState(false);

    return (
        <div className={gelap ? 'tema-gelap' : 'tema-terang'} style={{ textAlign: 'center' }}>
            <p>Halaman ini menggunakan tema {gelap ? 'gelap' : 'terang'}.</p>
            <button onClick={() => setGelap(!gelap)}>
                Ganti Tema
            </button>
        </div>
    );
}

export default function StylingExamples() {
    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Styling di React</h3>
            <KotakWarna />
            <Tombol label="Tombol dengan CSS File" />
            <br />
            <ToggleTema />
        </div>
    );
}
