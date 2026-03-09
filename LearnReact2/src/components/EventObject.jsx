// Event Object

import { useState } from 'react';

function FormInput() {
    const [teks, setTeks] = useState('');

    const handleChange = (event) => {
        setTeks(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <input
                type="text"
                value={teks}
                onChange={handleChange}
                placeholder="Ketik sesuatu..."
                style={{ padding: '8px', boxSizing: 'border-box', width: '100%' }}
            />
            <p style={{ margin: 0 }}>Kamu mengetik: {teks}</p>
        </div>
    );
}

export default FormInput;