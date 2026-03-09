import { useState } from 'react';

function StatusLogin({ isLoggedIn }) {
    if (isLoggedIn) {
        return <h4>Selamat datang kembali!</h4>;
    }
    return <h4>Silakan login terlebih dahulu.</h4>;
}

function Badge({ isAdmin }) {
    return (
        <div>
            <p>Peran: {isAdmin ? 'Admin' : 'User'}</p>
            {isAdmin ? (
                <button>Kelola Pengguna</button>
            ) : (
                <p>Anda tidak memiliki akses admin.</p>
            )}
        </div>
    );
}

function Notifikasi({ jumlahPesan }) {
    return (
        <div>
            <h4>Kotak Masuk</h4>
            {jumlahPesan > 0 && (
                <p>Kamu memiliki {jumlahPesan} pesan baru!</p>
            )}
        </div>
    );
}

function WarningBanner({ show, message }) {
    if (!show) {
        return null;
    }
    return (
        <div style={{ backgroundColor: '#ffeeba', color: '#856404', padding: '10px', borderRadius: '4px', margin: '10px 0' }}>
            ⚠️ {message}
        </div>
    );
}

function AccordionItem({ judul, isi }) {
    const [terbuka, setTerbuka] = useState(false);

    return (
        <div style={{ border: '1px solid #ccc', marginBottom: '8px', padding: '8px', borderRadius: '6px' }}>
            <button onClick={() => setTerbuka(!terbuka)}>
                {judul} {terbuka ? '▲' : '▼'}
            </button>
            {terbuka && (
                <p style={{ marginTop: '8px' }}>{isi}</p>
            )}
        </div>
    );
}

export default function ConditionalRendering() {
    const [showWarning, setShowWarning] = useState(true);

    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Conditional Rendering</h3>

            <StatusLogin isLoggedIn={true} />
            <hr />

            <Badge isAdmin={false} />
            <hr />

            <Notifikasi jumlahPesan={3} />
            <hr />

            <button onClick={() => setShowWarning(!showWarning)}>Toggle Warning</button>
            <WarningBanner show={showWarning} message="Ini adalah peringatan penting!" />
            <hr />

            <AccordionItem
                judul="Apa itu React?"
                isi="React adalah library JavaScript untuk membangun UI."
            />
            <AccordionItem
                judul="Apa itu JSX?"
                isi="JSX adalah sintaks yang memungkinkan kita menulis HTML di dalam JavaScript."
            />
        </div>
    );
}
