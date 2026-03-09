import { useState } from 'react';

function Kalkulator() {
    const [angka1, setAngka1] = useState('');
    const [angka2, setAngka2] = useState('');
    const [hasil, setHasil] = useState(null);

    const hitung = (operasi) => {
        const a = parseFloat(angka1);
        const b = parseFloat(angka2);

        if (isNaN(a) || isNaN(b)) {
            alert("Masukkan angka yang valid!");
            return;
        }

        switch (operasi) {
            case '+': setHasil(a + b); break;
            case '-': setHasil(a - b); break;
            case '*': setHasil(a * b); break;
            case '/': setHasil(b !== 0 ? a / b : 'Tak terhingga'); break;
            default: break;
        }
    };

    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h2 style={{ marginTop: 0 }}>Latihan 1: Kalkulator Sederhana</h2>
            <div style={{ marginBottom: '10px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <input
                    type="number"
                    value={angka1}
                    onChange={(e) => setAngka1(e.target.value)}
                    placeholder="Angka 1"
                    style={{ padding: '8px', flex: '1 1 100px', minWidth: '0' }}
                />
                <input
                    type="number"
                    value={angka2}
                    onChange={(e) => setAngka2(e.target.value)}
                    placeholder="Angka 2"
                    style={{ padding: '8px', flex: '1 1 100px', minWidth: '0' }}
                />
            </div>
            <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', justifyContent: 'center' }}>
                <button onClick={() => hitung('+')} style={{ padding: '5px 15px' }}>+</button>
                <button onClick={() => hitung('-')} style={{ padding: '5px 15px' }}>-</button>
                <button onClick={() => hitung('*')} style={{ padding: '5px 15px' }}>*</button>
                <button onClick={() => hitung('/')} style={{ padding: '5px 15px' }}>/</button>
            </div>
            {hasil !== null && <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Hasil: {hasil}</p>}
        </div>
    );
}

export default Kalkulator;
