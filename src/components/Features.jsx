import "./Features.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Features() {
  const features = [
    {
      icon: "🚚",
      title: "Free Delivery",
      text: "Fast and free delivery on all orders.",
      link: "/delivery",
    },
    {
      icon: "🔒",
      title: "Secure Payment",
      text: "100% secure and trusted payment system.",
      link: "/payment",
    },
    {
      icon: "↩️",
      title: "Easy Returns",
      text: "7-day hassle-free return policy.",
      link: "/returns",
    },
  ];

  return (
    <section className="features">
      <h2>Why Choose ShopSphere?</h2>

      <div className="feature-container">
        {features.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <motion.div
              className="feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h1>{item.icon}</h1>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Features;