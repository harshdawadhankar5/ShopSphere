import { Link } from "react-router-dom";
import "./ProductCard.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [liked, setLiked] = useState(false);

  function addToCart() {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  }

  return (
    <div className="card">
      <span className="sale">SALE</span>
      <span className="discount">20% OFF</span>
      <span
  className="wishlist"
  onClick={(e) => {
    e.preventDefault();
    setLiked(!liked);
  }}
>
  {liked ? "❤️" : "🤍"}
</span>

      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={product.image} alt={product.name} />

        <h3>{product.name}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(4.8)</span>
        </div>

        <p>${product.price}</p>
      </Link>

      <button onClick={addToCart}>
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;