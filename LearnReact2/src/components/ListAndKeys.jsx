import { useState } from 'react';

function ProductCard({ id, name, price, category }) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '16px', borderRadius: '8px', textAlign: 'left' }}>
            <span style={{ fontSize: '12px', color: '#888' }}>{category}</span>
            <h4 style={{ margin: '8px 0' }}>{name}</h4>
            <p style={{ margin: '0' }}>Rp {price.toLocaleString('id-ID')}</p>
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
        <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
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
        <div style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '10px' }}>
                {['Semua', 'Elektronik', 'Fashion'].map((kat) => (
                    <button
                        key={kat}
                        onClick={() => setKategori(kat)}
                        style={{ fontWeight: kategori === kat ? 'bold' : 'normal', marginRight: '8px', padding: '5px 10px' }}
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

export default function ListAndKeys() {
    return (
        <div className="glass-panel" style={{ marginBottom: '20px', padding: '20px' }}>
            <h3 style={{ marginTop: 0 }}>List & Keys</h3>
            <h4>Product List</h4>
            <ProductList />
            <hr />
            <h4>Filtered List</h4>
            <FilteredList />
        </div>
    );
}
