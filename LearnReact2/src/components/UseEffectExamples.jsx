import { useState, useEffect } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `SetCount : ${count}`;
    }, [count]);

    return (
        <div style={{ marginBottom: '10px' }}>
            <h4>Counter (Mengubah Title)</h4>
            <p>Nilai: {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    );
}

function DaftarUser() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Gagal mengambil data.');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Memuat data user...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div style={{ marginBottom: '10px' }}>
            <h4>Daftar User (Fetch API)</h4>
            <ul style={{ textAlign: 'left' }}>
                {users.slice(0, 3).map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function JamDigital() {
    const [waktu, setWaktu] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setWaktu(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ marginBottom: '10px' }}>
            <h4>Jam Digital (Timer & Cleanup)</h4>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {waktu.toLocaleTimeString('id-ID')}
            </p>
        </div>
    );
}

function Pencarian() {
    const [query, setQuery] = useState('');
    const [hasil, setHasil] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query === '') {
            setHasil([]);
            return;
        }

        setLoading(true);

        const timeout = setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
                .then((res) => res.json())
                .then((data) => {
                    // Filter locally since Fake API might not support `name_like` perfectly
                    const filtered = data.filter(u => u.name.toLowerCase().includes(query.toLowerCase()));
                    setHasil(filtered);
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(timeout);
    }, [query]);

    return (
        <div style={{ marginBottom: '10px', textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4>Pencarian dengan Debounce</h4>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari nama pengguna..."
                style={{ padding: '5px', width: '100%', maxWidth: '200px' }}
            />
            {loading && <p>Mencari...</p>}
            <ul style={{ minHeight: '50px', width: '100%', maxWidth: '300px' }}>
                {hasil.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
                {!loading && query !== '' && hasil.length === 0 && <li>Tidak ada hasil.</li>}
            </ul>
        </div>
    );
}

export default function UseEffectExamples() {
    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h3 style={{ marginTop: 0 }}>useEffect Hook</h3>
            <Counter />
            <hr />
            <DaftarUser />
            <hr />
            <JamDigital />
            <hr />
            <Pencarian />
        </div>
    );
}
