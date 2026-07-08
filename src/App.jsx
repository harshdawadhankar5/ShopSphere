import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

// NEW
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import Returns from "./pages/Returns";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />

        {/* Feature Pages */}
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/returns" element={<Returns />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;