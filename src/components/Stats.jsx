import "./Stats.css";
import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { number: "500+", title: "Products" },
    { number: "10K+", title: "Happy Customers" },
    { number: "24/7", title: "Support" },
    { number: "99%", title: "Positive Reviews" },
  ];

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="stat-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;