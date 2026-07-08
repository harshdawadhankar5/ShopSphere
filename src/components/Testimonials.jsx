import "./Testimonials.css";
import { motion } from "framer-motion";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      review: "Amazing products and super fast delivery!",
    },
    {
      name: "Priya Patel",
      review: "The quality is excellent. Highly recommended!",
    },
    {
      name: "Aman Verma",
      review: "Best shopping experience. Will buy again!",
    },
  ];

  return (
    <section className="testimonials">
      <h2>⭐ What Our Customers Say</h2>

      <div className="testimonial-container">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{item.name}</h3>
            <p>"{item.review}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;