import { useState } from 'react';

export default function MovieForm({ onTambahMovie }) {
    const [judul, setJudul] = useState('');
    const [genre, setGenre] = useState('');
    const [rating, setRating] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!judul || !genre || !rating) {
            alert('Semua field wajib diisi!');
            return;
        }

        if (rating < 1 || rating > 5) {
            alert('Rating harus antara 1-5');
            return;
        }

        onTambahMovie({
            id: Date.now(),
            judul,
            genre,
            rating: Number(rating),
            favorit: false
        });

        setJudul('');
        setGenre('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit} className="glass-panel" style={{ marginBottom: '20px', padding: '20px', borderRadius: '8px' }}>
            <h3 style={{ marginTop: 0, color: '#fff' }}>Tambah Film Baru</h3>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <input
                    type="text"
                    placeholder="Judul Film"
                    value={judul}
                    onChange={(e) => setJudul(e.target.value)}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
                />
                <input
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1 }}
                />
                <input
                    type="number"
                    placeholder="Rating (1-5)"
                    min="1" max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', flex: 1, minWidth: '100px' }}
                />
            </div>
            <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Tambah Film
            </button>
        </form>
    );
}
