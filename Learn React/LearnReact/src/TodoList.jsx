// ### Latihan 3: Menggunakan State
// Buat aplikasi Todo List sederhana dengan fitur:
// - Input untuk menambah todo
// - Tombol untuk menambah todo ke list
// - Menampilkan daftar todo

import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    const newTodo = {
      id: Date.now(),
      text: trimmed,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleTodoClick = (id) => {
    // TODO: Implementasi fungsi untuk mengganti status todo
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id) => {
    // TODO: Implementasi fungsi untuk menghapus todo
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <div className="contact-form" style={{ marginBottom: '2rem' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Protocol task description..."
          style={{ marginBottom: '1rem' }}
        />
        <button className="btn-primary" onClick={addTodo} style={{ width: '100%' }}>Deploy Task</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="todo-item"
            style={{ marginBottom: 0 }}
          >
            <span
              onClick={() => handleTodoClick(todo.id)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
                flex: 1,
                fontSize: '1.1rem',
                color: todo.completed ? "rgba(255,255,255,0.3)" : "var(--text-primary)",
                transition: 'all 0.3s ease'
              }}
            >
              • {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{ background: 'transparent', border: 'none', color: 'var(--pink)', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1 }}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
