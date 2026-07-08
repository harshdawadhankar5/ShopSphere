import "../styles/Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import calculateTotal from "../utils/CalculateTotal";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const totalPrice = calculateTotal(cart);

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  }

  // ✅ Empty Cart
  if (cart.length === 0) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1>🛒 Your Cart is Empty</h1>
        <p>Add some products to continue shopping.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>🛒 Shopping Cart</h1>

      <h2>Total Items: {cart.length}</h2>

      <h2>Total Price: ${totalPrice}</h2>

      <hr />

      <div
        className="summary-box"
        style={{
          background: "#f8fafc",
          padding: "20px",
          borderRadius: "10px",
          marginBottom: "30px",
        }}
      >
        <h2>🧾 Order Summary</h2>

        <p>Items: {cart.length}</p>

        <p>Total: ${totalPrice}</p>

        <button
          style={{
            padding: "15px 30px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Proceed to Checkout
        </button>
      </div>

      {cart.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            margin: "20px 0",
            borderRadius: "10px",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            width="120"
          />

          <h3>{product.name}</h3>

          <p>Price: ${product.price}</p>

          <p>Quantity: {product.quantity}</p>

          <button
            onClick={() => decreaseQuantity(product.id)}
            style={{
              padding: "8px 15px",
              marginRight: "10px",
            }}
          >
            ➖
          </button>

          <button
            onClick={() => increaseQuantity(product.id)}
            style={{
              padding: "8px 15px",
              marginRight: "10px",
            }}
          >
            ➕
          </button>

          <button
            onClick={() => removeItem(product.id)}
            style={{
              padding: "8px 15px",
              background: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            ❌ Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;