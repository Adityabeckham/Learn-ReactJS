import { useState } from 'react';

function Counter() {
  // Deklarasi state
  // count = nilai state saat ini
  // setCount = function untuk mengubah state
  const [count, setCount] = useState(0);
 
  return (
    <div>
      <p>Nilai: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>
      <button onClick={() => setCount(count - 1)}>
        Kurang
      </button>
    </div>
  );
}

export default Counter;

// import { useState } from 'react';

// function FormNama() {
//   const [nama, setNama] = useState('');

//   return (
//     <div>
//       <input
//         type="text"
//         value={nama}
//         onChange={(e) => setNama(e.target.value)}
//         placeholder="Masukkan nama"
//       />
//       <p>Nama kamu: {nama}</p>
//     </div>
//   );
// }