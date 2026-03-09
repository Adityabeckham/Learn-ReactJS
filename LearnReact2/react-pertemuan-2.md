# React - Pertemuan 2: Event Handling, Conditional Rendering, List & Keys, dan useEffect

## Daftar Isi
1. [Review Pertemuan 1](#review-pertemuan-1)
2. [Event Handling](#event-handling)
3. [Conditional Rendering](#conditional-rendering)
4. [List & Keys](#list--keys)
5. [useEffect Hook](#useeffect-hook)
6. [Styling di React](#styling-di-react)
7. [Latihan](#latihan)
8. [Tugas Mandiri](#tugas-mandiri)

---

## Review Pertemuan 1

Pada pertemuan sebelumnya kita sudah belajar:
- ✅ JSX - sintaks mirip HTML di dalam JavaScript
- ✅ Components - blok bangunan UI React
- ✅ Props - mengirim data dari parent ke child component
- ✅ useState - menyimpan dan mengubah data dalam component

Pada pertemuan ini kita akan mempelajari cara menangani **interaksi pengguna**, **menampilkan UI secara kondisional**, **merender daftar data**, dan **menjalankan efek samping** dengan hooks.

---

## Event Handling

Event handling adalah cara React merespons aksi yang dilakukan pengguna, seperti klik tombol, mengetik di input, atau submit form.

### Event Dasar

Di React, event handler ditulis sebagai **camelCase** (bukan lowercase seperti HTML biasa).

```jsx
// HTML biasa
<button onclick="handleClick()">Klik</button>

// React (camelCase + function reference)
<button onClick={handleClick}>Klik</button>
```

### Contoh Event Handler

```jsx
function TombolKlik() {
  const handleClick = () => {
    alert('Tombol diklik!');
  };

  return <button onClick={handleClick}>Klik Saya</button>;
}
```

> **Perhatian:** Tulis `onClick={handleClick}`, bukan `onClick={handleClick()}`.
> Jika menggunakan tanda kurung `()`, fungsi langsung dipanggil saat render, bukan saat diklik.

### Event dengan Argument

Jika perlu mengirim argumen ke handler, gunakan arrow function:

```jsx
function DaftarBuah() {
  const handleKlik = (nama) => {
    alert(`Kamu memilih: ${nama}`);
  };

  return (
    <div>
      <button onClick={() => handleKlik('Apel')}>Apel</button>
      <button onClick={() => handleKlik('Mangga')}>Mangga</button>
      <button onClick={() => handleKlik('Jeruk')}>Jeruk</button>
    </div>
  );
}
```

### Event Object

Setiap event handler menerima **event object** yang berisi informasi tentang event yang terjadi.

```jsx
import { useState } from 'react';

function FormInput() {
  const [teks, setTeks] = useState('');

  const handleChange = (event) => {
    // event.target adalah elemen yang memicu event
    // event.target.value adalah nilai input saat ini
    setTeks(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={teks}
        onChange={handleChange}
        placeholder="Ketik sesuatu..."
      />
      <p>Kamu mengetik: {teks}</p>
    </div>
  );
}
```

### Mencegah Default Behavior

Untuk mencegah perilaku default browser (misalnya refresh halaman saat submit form):

```jsx
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
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
```

### Jenis-Jenis Event Umum

| Event        | Digunakan pada          | Keterangan                        |
|--------------|-------------------------|-----------------------------------|
| `onClick`    | Semua elemen            | Saat elemen diklik                |
| `onChange`   | `input`, `select`       | Saat nilai berubah                |
| `onSubmit`   | `form`                  | Saat form di-submit               |
| `onFocus`    | `input`, `textarea`     | Saat elemen mendapat fokus        |
| `onBlur`     | `input`, `textarea`     | Saat elemen kehilangan fokus      |
| `onMouseEnter` | Semua elemen          | Saat kursor masuk ke elemen       |
| `onMouseLeave` | Semua elemen          | Saat kursor keluar dari elemen    |
| `onKeyDown`  | `input`, `textarea`     | Saat tombol keyboard ditekan      |

---

## Conditional Rendering

Conditional rendering adalah teknik menampilkan atau menyembunyikan elemen berdasarkan kondisi tertentu.

### Menggunakan `if` Statement

```jsx
function StatusLogin({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Selamat datang kembali!</h1>;
  }

  return <h1>Silakan login terlebih dahulu.</h1>;
}

// Penggunaan:
<StatusLogin isLoggedIn={true} />
<StatusLogin isLoggedIn={false} />
```

### Menggunakan Ternary Operator `? :`

Ternary operator cocok untuk kondisi sederhana langsung di dalam JSX:

```jsx
function Badge({ isAdmin }) {
  return (
    <div>
      <p>Peran: {isAdmin ? 'Admin' : 'User'}</p>
      {isAdmin ? (
        <button>Kelola Pengguna</button>
      ) : (
        <p>Anda tidak memiliki akses admin.</p>
      )}
    </div>
  );
}
```

### Menggunakan `&&` (Short-circuit Evaluation)

`&&` berguna ketika hanya ingin menampilkan sesuatu jika kondisi `true`, tanpa alternatif lain:

```jsx
function Notifikasi({ jumlahPesan }) {
  return (
    <div>
      <h1>Kotak Masuk</h1>
      {jumlahPesan > 0 && (
        <p>Kamu memiliki {jumlahPesan} pesan baru!</p>
      )}
    </div>
  );
}

// Jika jumlahPesan = 0, maka paragraf tidak ditampilkan
```

> **Hati-hati:** Hindari menggunakan angka `0` langsung sebagai kondisi `&&`, karena React akan merender angka `0` ke layar.
> ```jsx
> // BERBAHAYA - akan render angka "0" ke layar
> {items.length && <List />}
>
> // AMAN - gunakan perbandingan eksplisit
> {items.length > 0 && <List />}
> ```

### Menyembunyikan Component dengan `null`

Jika sebuah component mengembalikan `null`, component tidak akan dirender:

```jsx
function WarningBanner({ show, message }) {
  if (!show) {
    return null; // Component tidak dirender sama sekali
  }

  return (
    <div className="warning">
      ⚠️ {message}
    </div>
  );
}
```

### Contoh Lengkap: Toggle Konten

```jsx
import { useState } from 'react';

function AccordionItem({ judul, isi }) {
  const [terbuka, setTerbuka] = useState(false);

  return (
    <div style={{ border: '1px solid #ccc', marginBottom: '8px', padding: '8px' }}>
      <button onClick={() => setTerbuka(!terbuka)}>
        {judul} {terbuka ? '▲' : '▼'}
      </button>
      {terbuka && (
        <p style={{ marginTop: '8px' }}>{isi}</p>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <AccordionItem judul="Apa itu React?" isi="React adalah library JavaScript untuk membangun UI." />
      <AccordionItem judul="Apa itu JSX?" isi="JSX adalah sintaks yang memungkinkan kita menulis HTML di dalam JavaScript." />
    </div>
  );
}
```

---

## List & Keys

Sering kali kita perlu menampilkan daftar data, misalnya daftar produk, daftar pengguna, atau daftar todo.

### Merender List dengan `.map()`

Method `.map()` digunakan untuk mengubah array data menjadi array elemen JSX:

```jsx
function DaftarBuah() {
  const buah = ['Apel', 'Mangga', 'Jeruk', 'Semangka'];

  return (
    <ul>
      {buah.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```

### Pentingnya `key` Prop

Setiap elemen dalam list **wajib** memiliki prop `key` yang unik. `key` membantu React mengidentifikasi elemen mana yang berubah, ditambah, atau dihapus.

```jsx
// ❌ Salah - tanpa key
{users.map(user => <li>{user.name}</li>)}

// ⚠️ Kurang baik - menggunakan index (jika list bisa berubah urutan)
{users.map((user, index) => <li key={index}>{user.name}</li>)}

// ✅ Benar - menggunakan ID unik dari data
{users.map(user => <li key={user.id}>{user.name}</li>)}
```

> Gunakan `index` sebagai `key` hanya jika data list **tidak akan berubah urutan** dan **tidak memiliki ID unik**.

### Merender List dengan Component

```jsx
function ProductCard({ id, name, price, category }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px' }}>
      <span style={{ fontSize: '12px', color: '#888' }}>{category}</span>
      <h3>{name}</h3>
      <p>Rp {price.toLocaleString('id-ID')}</p>
    </div>
  );
}

function ProductList() {
  const products = [
    { id: 1, name: 'Laptop ASUS', price: 12000000, category: 'Elektronik' },
    { id: 2, name: 'Mouse Logitech', price: 350000, category: 'Aksesoris' },
    { id: 3, name: 'Keyboard Mechanical', price: 800000, category: 'Aksesoris' },
  ];

  return (
    <div style={{ display: 'grid', gap: '16px' }}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
}
```

### Filter dan Map

Kita bisa menggabungkan `.filter()` dan `.map()` untuk menampilkan subset dari data:

```jsx
import { useState } from 'react';

function FilteredList() {
  const [kategori, setKategori] = useState('Semua');

  const produk = [
    { id: 1, nama: 'Laptop', kategori: 'Elektronik' },
    { id: 2, nama: 'Baju', kategori: 'Fashion' },
    { id: 3, nama: 'Mouse', kategori: 'Elektronik' },
    { id: 4, nama: 'Sepatu', kategori: 'Fashion' },
    { id: 5, nama: 'Headphone', kategori: 'Elektronik' },
  ];

  const produkTerfilter = kategori === 'Semua'
    ? produk
    : produk.filter((p) => p.kategori === kategori);

  return (
    <div>
      <div>
        {['Semua', 'Elektronik', 'Fashion'].map((kat) => (
          <button
            key={kat}
            onClick={() => setKategori(kat)}
            style={{ fontWeight: kategori === kat ? 'bold' : 'normal', marginRight: '8px' }}
          >
            {kat}
          </button>
        ))}
      </div>

      <ul>
        {produkTerfilter.map((p) => (
          <li key={p.id}>{p.nama} - {p.kategori}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## useEffect Hook

`useEffect` adalah hook yang digunakan untuk menjalankan **efek samping** (side effects) di dalam component. Efek samping adalah operasi yang berinteraksi dengan "dunia luar" component, seperti:

- Mengambil data dari API
- Memanipulasi DOM secara langsung
- Mengatur timer (`setTimeout`, `setInterval`)
- Berlangganan event

### Sintaks Dasar

```jsx
import { useEffect } from 'react';

useEffect(() => {
  // Kode efek samping di sini
}, [dependencies]);
```

Parameter kedua `[dependencies]` adalah **dependency array** yang menentukan kapan efek dijalankan.

### Kapan useEffect Berjalan?

| Dependency Array       | Kapan Berjalan                                      |
|------------------------|-----------------------------------------------------|
| Tidak ada (dihilangkan)| Setiap kali component re-render                     |
| `[]` (array kosong)    | Hanya sekali, saat component pertama kali muncul    |
| `[a, b]`               | Saat pertama muncul + setiap kali `a` atau `b` berubah |

### Contoh 1: Mengubah Judul Halaman

```jsx
import { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Jalankan setiap kali `count` berubah
  useEffect(() => {
    document.title = `Hitungan: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Nilai: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}
```

### Contoh 2: Mengambil Data dari API (Fetch)

```jsx
import { useState, useEffect } from 'react';

function DaftarUser() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Jalankan sekali saat component pertama muncul
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Gagal mengambil data.');
        setLoading(false);
      });
  }, []); // Array kosong = hanya jalankan sekali

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}
```

### Contoh 3: Timer dengan Cleanup

Ketika component dihapus dari halaman (unmount), kita perlu membersihkan efek samping seperti timer agar tidak terjadi memory leak. Ini dilakukan dengan mengembalikan **cleanup function** dari useEffect.

```jsx
import { useState, useEffect } from 'react';

function JamDigital() {
  const [waktu, setWaktu] = useState(new Date());

  useEffect(() => {
    // Buat interval setiap 1 detik
    const interval = setInterval(() => {
      setWaktu(new Date());
    }, 1000);

    // Cleanup: hapus interval saat component unmount
    return () => {
      clearInterval(interval);
    };
  }, []); // Hanya buat interval sekali

  return (
    <div>
      <h2>Jam Sekarang:</h2>
      <p style={{ fontSize: '2rem' }}>
        {waktu.toLocaleTimeString('id-ID')}
      </p>
    </div>
  );
}
```

### Contoh 4: useEffect Bergantung pada State

```jsx
import { useState, useEffect } from 'react';

function Pencarian() {
  const [query, setQuery] = useState('');
  const [hasil, setHasil] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Jika query kosong, reset hasil
    if (query === '') {
      setHasil([]);
      return;
    }

    setLoading(true);

    // Simulasi fetch data (debounce sederhana)
    const timeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then((res) => res.json())
        .then((data) => {
          setHasil(data);
          setLoading(false);
        });
    }, 500);

    // Cleanup: batalkan fetch sebelumnya jika query berubah lagi
    return () => clearTimeout(timeout);
  }, [query]); // Jalankan setiap kali `query` berubah

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cari nama pengguna..."
      />
      {loading && <p>Mencari...</p>}
      <ul>
        {hasil.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Styling di React

Ada beberapa cara untuk memberi style pada component React.

### 1. Inline Style

```jsx
function KotakWarna() {
  const gaya = {
    backgroundColor: '#4f46e5',  // camelCase, bukan kebab-case
    color: 'white',
    padding: '16px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return <div style={gaya}>Kotak Ungu</div>;
}

// Atau langsung inline
function Tombol() {
  return (
    <button style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px' }}>
      Klik
    </button>
  );
}
```

### 2. CSS File Biasa

Buat file `Komponen.css` lalu import ke file JSX:

```css
/* Tombol.css */
.tombol-utama {
  background-color: #4f46e5;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.tombol-utama:hover {
  background-color: #4338ca;
}
```

```jsx
// Tombol.jsx
import './Tombol.css';

function Tombol({ label }) {
  return <button className="tombol-utama">{label}</button>;
}
```

### 3. Dynamic Class dengan State

```jsx
import { useState } from 'react';
import './styles.css';

function ToggleTema() {
  const [gelap, setGelap] = useState(false);

  return (
    <div className={gelap ? 'tema-gelap' : 'tema-terang'}>
      <p>Halaman ini menggunakan tema {gelap ? 'gelap' : 'terang'}.</p>
      <button onClick={() => setGelap(!gelap)}>
        Ganti Tema
      </button>
    </div>
  );
}
```

```css
/* styles.css */
.tema-terang {
  background-color: #ffffff;
  color: #000000;
  padding: 20px;
}

.tema-gelap {
  background-color: #1a1a2e;
  color: #ffffff;
  padding: 20px;
}
```

---

## Latihan

### Latihan 1: Event Handling - Kalkulator Sederhana

Buat component `Kalkulator` dengan dua input angka dan tombol operasi (Tambah, Kurang, Kali, Bagi).

```jsx
import { useState } from 'react';

function Kalkulator() {
  const [angka1, setAngka1] = useState('');
  const [angka2, setAngka2] = useState('');
  const [hasil, setHasil] = useState(null);

  const hitung = (operasi) => {
    const a = parseFloat(angka1);
    const b = parseFloat(angka2);
    // TODO: Implementasikan logika kalkulasi
    // Gunakan switch atau if-else untuk tiap operasi
  };

  return (
    <div>
      <h2>Kalkulator</h2>
      <input
        type="number"
        value={angka1}
        onChange={(e) => setAngka1(e.target.value)}
        placeholder="Angka 1"
      />
      <input
        type="number"
        value={angka2}
        onChange={(e) => setAngka2(e.target.value)}
        placeholder="Angka 2"
      />
      <div>
        {/* TODO: Buat 4 tombol untuk +, -, *, / */}
      </div>
      {hasil !== null && <p>Hasil: {hasil}</p>}
    </div>
  );
}

export default Kalkulator;
```

---

### Latihan 2: Conditional Rendering - Sistem Nilai

Buat component `HasilUjian` yang menerima prop `nilai` (0-100) dan menampilkan:
- Nilai kurang dari 60: "Tidak Lulus" (warna merah)
- Nilai 60-79: "Lulus" (warna kuning)
- Nilai 80-100: "Lulus dengan Pujian" (warna hijau)

```jsx
function HasilUjian({ nilai }) {
  // TODO: Tentukan status dan warna berdasarkan nilai

  return (
    <div>
      <h2>Nilai: {nilai}</h2>
      {/* TODO: Tampilkan status dengan warna yang sesuai */}
    </div>
  );
}

// Penggunaan:
// <HasilUjian nilai={55} />
// <HasilUjian nilai={75} />
// <HasilUjian nilai={90} />

export default HasilUjian;
```

---

### Latihan 3: List & Keys + State - Todo List Lengkap

Lengkapi Todo List dari pertemuan sebelumnya dengan fitur **hapus todo**:

```jsx
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
    // TODO: Filter todos untuk menghapus item dengan id yang cocok
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && tambahTodo()}
          placeholder="Tambah todo baru..."
        />
        <button onClick={tambahTodo}>Tambah</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.teks}
            {/* TODO: Tambahkan tombol hapus */}
          </li>
        ))}
      </ul>
      <p>Total: {todos.length} todo</p>
    </div>
  );
}

export default TodoList;
```

---

### Latihan 4: useEffect - Data dari API

Buat component `DaftarPost` yang mengambil data dari API publik:

```jsx
import { useState, useEffect } from 'react';

function DaftarPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch data dari URL berikut:
    // https://jsonplaceholder.typicode.com/posts?_limit=5
    // Simpan ke state posts, set loading ke false setelah selesai
  }, []);

  if (loading) {
    return <p>Memuat post...</p>;
  }

  return (
    <div>
      <h2>Daftar Post</h2>
      {/* TODO: Render setiap post menggunakan map */}
      {/* Tampilkan: title dan body dari setiap post */}
    </div>
  );
}

export default DaftarPost;
```

---

## Tugas Mandiri

### Challenge: Aplikasi Movie List

Buat aplikasi **Daftar Film** dengan fitur lengkap sebagai berikut:

#### Komponen yang Harus Dibuat:

1. **`MovieCard`** - Menampilkan info satu film:
   - Judul film
   - Genre
   - Rating (tampilkan bintang ⭐ sesuai rating)
   - Tombol "Hapus"
   - Tampilkan badge "Favorit ❤️" jika film ditandai sebagai favorit
   - Tombol toggle "Tambah ke Favorit" / "Hapus dari Favorit"

2. **`MovieForm`** - Form untuk menambah film baru:
   - Input teks untuk judul
   - Input teks untuk genre
   - Input angka untuk rating (1-5)
   - Tombol submit dengan validasi (semua field wajib diisi)

3. **`MovieList`** - Component utama yang:
   - Menyimpan array film dalam `useState`
   - Memiliki filter berdasarkan genre (tampilkan semua genre yang ada)
   - Menampilkan jumlah total film dan jumlah film favorit
   - Mengintegrasikan `MovieForm` dan `MovieCard`

#### Data Awal:

```javascript
const filmAwal = [
  { id: 1, judul: 'Laskar Pelangi', genre: 'Drama', rating: 5, favorit: false },
  { id: 2, judul: 'Avengers: Endgame', genre: 'Action', rating: 4, favorit: false },
  { id: 3, judul: 'Interstellar', genre: 'Sci-Fi', rating: 5, favorit: false },
  { id: 4, judul: 'The Dark Knight', genre: 'Action', rating: 5, favorit: false },
  { id: 5, judul: 'Parasite', genre: 'Thriller', rating: 4, favorit: false },
];
```

#### Fitur Bonus (Nilai Tambah):
- Gunakan `useEffect` untuk menyimpan daftar film ke `localStorage` sehingga data tidak hilang saat halaman di-refresh
- Tambahkan animasi sederhana saat film ditambah atau dihapus
- Tambahkan fitur pencarian berdasarkan judul

#### Kriteria Penilaian:
- [ ] Semua komponen terstruktur dengan baik
- [ ] List dirender menggunakan `.map()` dengan `key` yang benar
- [ ] Conditional rendering digunakan minimal 2 tempat
- [ ] Event handling berfungsi (tambah, hapus, toggle favorit)
- [ ] Filter genre berfungsi
- [ ] Validasi form berjalan
- [ ] Kode bersih dan mudah dibaca

---

## Ringkasan Materi

| Konsep               | Kegunaan                                           | Hook/Metode         |
|----------------------|----------------------------------------------------|---------------------|
| Event Handling       | Merespons aksi pengguna                            | `onClick`, `onChange`, dll |
| Conditional Rendering| Menampilkan UI berdasarkan kondisi                 | `if`, `? :`, `&&`   |
| List & Keys          | Merender daftar data secara dinamis                | `.map()`, `key`     |
| useEffect            | Menjalankan efek samping (fetch, timer, DOM)       | `useEffect`         |
| Styling              | Memberi tampilan pada component                    | CSS, inline style   |

---

## Referensi

- [Dokumentasi React: Responding to Events](https://react.dev/learn/responding-to-events)
- [Dokumentasi React: Conditional Rendering](https://react.dev/learn/conditional-rendering)
- [Dokumentasi React: Rendering Lists](https://react.dev/learn/rendering-lists)
- [Dokumentasi React: Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [JSONPlaceholder - Free Fake REST API untuk latihan](https://jsonplaceholder.typicode.com)

---

**Selamat Belajar! 🚀**

Pada pertemuan berikutnya, kita akan membahas:
- Custom Hooks
- Context API untuk state management global
- React Router untuk navigasi antar halaman
