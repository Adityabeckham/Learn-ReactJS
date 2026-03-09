import { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, teks: 'Belajar React' },
        { id: 2, teks: 'Mengerjakan tugas' },
    ]);
    const [inputValue, setInputValue] = useState('');

    const tambahTodo = () => {
        if (inputValue.trim() === '') return;
        const todoBaru = {
            id: Date.now(), // Gunakan timestamp sebagai ID unik
            teks: inputValue,
        };
        setTodos([...todos, todoBaru]);
        setInputValue('');
    };

    const hapusTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px', textAlign: 'left' }}>
            <h2 style={{ marginTop: 0 }}>Latihan 3: Todo List Lengkap</h2>
            <div style={{ marginBottom: '10px' }}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && tambahTodo()}
                    placeholder="Tambah todo baru..."
                    style={{ padding: '8px', marginRight: '8px', width: '100%', maxWidth: '200px', boxSizing: 'border-box' }}
                />
                <button onClick={tambahTodo} style={{ padding: '8px 16px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Tambah</button>
            </div>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                        <span>{todo.teks}</span>
                        <button
                            onClick={() => hapusTodo(todo.id)}
                            style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
                        >
                            Hapus
                        </button>
                    </li>
                ))}
            </ul>
            <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Total: {todos.length} todo</p>
        </div>
    );
}

export default TodoList;
