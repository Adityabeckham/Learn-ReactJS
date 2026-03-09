import { useState, useEffect } from 'react';

function DaftarPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
            .then(res => res.json())
            .then(data => {
                setPosts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Gagal memuat post:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Memuat post...</p>;
    }

    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ marginTop: 0 }}>Latihan 4: Daftar Post dari API</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {posts.map(post => (
                    <div key={post.id} style={{ padding: '10px', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '6px', background: 'rgba(255,255,255,0.05)' }}>
                        <h4 style={{ margin: '0 0 8px 0', color: '#ffdddd' }}>{post.title}</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: '#eeeeee' }}>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DaftarPost;
