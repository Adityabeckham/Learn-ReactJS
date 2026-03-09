// ### Latihan 2: Menggunakan Props
// Buat component `ProductCard` yang menerima props: `name`, `price`, dan `image`.

// ```jsx
// // File: ProductCard.jsx

function ProductCard({ name, price, image, width, height }) {
  return (
    <div className="product-card">
      <img
        src={image}
        alt={name}
        className="product-img mb-4"
        style={{ width: width || '100%', height: height || 'auto' }}
      />
      <h3 className="gradient-text">{name}</h3>
      <p className="text-secondary">{price}</p>
    </div>
  );
}

export default ProductCard;