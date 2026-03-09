import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MovieForm from './MovieForm';

const filmAwal = [
    { id: 1, judul: 'Laskar Pelangi', genre: 'Drama', rating: 5, favorit: false },
    { id: 2, judul: 'Avengers: Endgame', genre: 'Action', rating: 4, favorit: false },
    { id: 3, judul: 'Interstellar', genre: 'Sci-Fi', rating: 5, favorit: false },
    { id: 4, judul: 'The Dark Knight', genre: 'Action', rating: 5, favorit: false },
    { id: 5, judul: 'Parasite', genre: 'Thriller', rating: 4, favorit: false },
];

export default function MovieApp() {
    const [movies, setMovies] = useState(() => {
        const saved = localStorage.getItem('movies');
        return saved ? JSON.parse(saved) : filmAwal;
    });

    const [filterGenre, setFilterGenre] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(movies));
    }, [movies]);

    const handleTambahMovie = (newMovie) => {
        setMovies([newMovie, ...movies]);
    };

    const handleHapusMovie = (id) => {
        setMovies(movies.filter(m => m.id !== id));
    };

    const handleToggleFavorit = (id) => {
        setMovies(movies.map(m =>
            m.id === id ? { ...m, favorit: !m.favorit } : m
        ));
    };

    const genres = ['Semua', ...new Set(movies.map(m => m.genre))];

    const filteredMovies = movies.filter(m => {
        const matchGenre = filterGenre === 'Semua' || m.genre === filterGenre;
        const matchSearch = m.judul.toLowerCase().includes(searchQuery.toLowerCase());
        return matchGenre && matchSearch;
    });

    const totalFavorit = movies.filter(m => m.favorit).length;

    return (
        <div className="glass-panel" style={{ padding: '20px', textAlign: 'left', marginTop: '20px' }}>
            <h2 style={{ marginTop: 0, color: 'white' }}>Tugas Mandiri: Aplikasi Movie List</h2>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', background: 'rgba(255, 255, 255, 0.1)', padding: '10px', borderRadius: '8px' }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>Total Film: {movies.length}</p>
                <p style={{ margin: 0, fontWeight: 'bold', color: '#ffbaba' }}>Total Favorit: {totalFavorit}</p>
            </div>

            <MovieForm onTambahMovie={handleTambahMovie} />

            <div style={{ marginBottom: '20px', display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div>
                    <strong style={{ marginRight: '10px' }}>Filter Genre:</strong>
                    {genres.map(g => (
                        <button
                            key={g}
                            onClick={() => setFilterGenre(g)}
                            style={{
                                marginRight: '5px',
                                padding: '4px 10px',
                                borderRadius: '20px',
                                border: '1px solid #ccc',
                                backgroundColor: filterGenre === g ? '#ef4444' : 'white',
                                color: filterGenre === g ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            {g}
                        </button>
                    ))}
                </div>

                <div style={{ marginLeft: 'auto' }}>
                    <input
                        type="text"
                        placeholder="Cari judul..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{ padding: '6px 12px', borderRadius: '20px', border: '1px solid #ccc' }}
                    />
                </div>
            </div>

            <div>
                {filteredMovies.length > 0 ? (
                    filteredMovies.map(movie => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onToggleFavorit={handleToggleFavorit}
                            onHapus={handleHapusMovie}
                        />
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>Tidak ada film yang cocok.</p>
                )}
            </div>
        </div>
    );
}
