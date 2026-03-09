export default function MovieCard({ movie, onToggleFavorit, onHapus }) {
    return (
        <div className="glass-panel" style={{
            padding: '16px',
            marginBottom: '10px',
            position: 'relative',
            transition: 'all 0.3s ease',
            border: movie.favorit ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.2)',
            background: movie.favorit ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.05)'
        }}>
            {movie.favorit && <span style={{ position: 'absolute', top: '10px', right: '10px', color: '#ffbaba' }}>❤️ Favorit</span>}
            <h3 style={{ margin: '0 0 5px 0', color: '#fff' }}>{movie.judul}</h3>
            <p style={{ margin: '0 0 5px 0', fontSize: '14px', color: '#ccc' }}>Genre: {movie.genre}</p>
            <p style={{ margin: '0 0 10px 0' }}>Rating: {'⭐'.repeat(movie.rating)}</p>

            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={() => onToggleFavorit(movie.id)}
                    style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #d97706', backgroundColor: 'transparent' }}
                >
                    {movie.favorit ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
                </button>
                <button
                    onClick={() => onHapus(movie.id)}
                    style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: 'none', backgroundColor: '#ef4444', color: 'white' }}
                >
                    Hapus
                </button>
            </div>
        </div>
    );
}
