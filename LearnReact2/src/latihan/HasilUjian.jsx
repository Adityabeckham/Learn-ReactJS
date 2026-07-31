function HasilUjian({ nilai }) {
    let status = '';
    let warna = '';

    if (nilai < 60) {
        status = 'Tidak Lulus';
        warna = 'red';
    } else if (nilai >= 60 && nilai <= 79) {
        status = 'Lulus';
        warna = '#d97706'; // dark yellow/orange for better readability
    } else if (nilai >= 80 && nilai <= 100) {
        status = 'Lulus dengan Pujian';
        warna = 'green';
    } else {
        status = 'Nilai tidak valid';
        warna = 'black';
    }

    return (
        <div style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '8px', marginBottom: '10px' }}>
            <h3>Nilai: {nilai}</h3>
            <p style={{ color: warna, fontWeight: 'bold', fontSize: '1.2rem', margin: 0 }}>Status: {status}</p>
        </div>
    );
}

export default function LatihanHasilUjian() {
    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h2 style={{ marginTop: 0 }}>Latihan 2: Hasil Ujian</h2>
            <HasilUjian nilai={100} />
            <HasilUjian nilai={85} />
            <HasilUjian nilai={79} />
            <HasilUjian nilai={60} />
            <HasilUjian nilai={59} />
        </div>
    );
}
