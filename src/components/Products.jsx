import "./Products.css";
import ProductCard from "./ProductCard";
import products from "../data/products";
import SearchBar from "./SearchBar";

function Products({ search, setSearch }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((search || "").toLowerCase())
  );

  return (
    <section className="products">
      <h2 className="product-title">
        🔥 Featured Products
      </h2>

      <p className="product-subtitle">
        Discover the latest fashion, electronics and accessories at the best prices.
      </p>

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      <div className="categories">
        <button className="active">All</button>
        <button>👟 Shoes</button>
        <button>⌚ Watches</button>
        <button>🎧 Electronics</button>
        <button>👕 Fashion</button>
      </div>

      <div className="product-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h3>No products found 😢</h3>
        )}
      </div>
    </section>
  );
}

export default Products;