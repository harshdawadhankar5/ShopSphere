import { useState } from "react";

import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";

function Home() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Hero />

      <Stats />

      <Features />

      <Products
        search={search}
        setSearch={setSearch}
      />

      <Testimonials />
    </>
  );
}

export default Home;