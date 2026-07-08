import "./Hero.css";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-content">
        <h1>Welcome to ShopSphere</h1>

        <p>
          Discover the latest fashion, electronics and accessories
          at the best prices.
        </p>

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            document.querySelector(".products")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          🛍 Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
}

export default Hero;