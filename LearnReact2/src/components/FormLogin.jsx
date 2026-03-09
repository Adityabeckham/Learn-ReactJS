import { useState } from 'react';

function FormLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah halaman refresh
        console.log('Login dengan:', email, password);
        alert(`Login sebagai: ${email}`);
    };

    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h3 style={{ marginTop: 0 }}>Form Login (Event.preventDefault)</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    style={{ padding: '8px', boxSizing: 'border-box', width: '100%' }}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    style={{ padding: '8px', boxSizing: 'border-box', width: '100%' }}
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Login</button>
            </form>
        </div>
    );
}

export default FormLogin;
