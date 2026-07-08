import { useParams } from "react-router-dom";
import { useContext } from "react";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { cart, setCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product Not Found</h2>;
  }

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
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "50px",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "350px",
          borderRadius: "15px",
        }}
      />

      <div>
        <h1>{product.name}</h1>

        <h2 style={{ color: "green" }}>
          ${product.price}
        </h2>

        <p style={{ maxWidth: "400px" }}>
          Premium quality product available at the best price.
          Fast delivery and easy returns.
        </p>

        <button
          onClick={addToCart}
          style={{
            padding: "15px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          🛒 Add to Cart
        </button>
        <p style={{ color: "green", marginTop: "10px" }}>
  ✔ In Stock | Free Delivery
</p>
      </div>
    </div>
  );
}

export default ProductDetails;