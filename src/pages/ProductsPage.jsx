import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Products from "../components/Products";

function ProductsPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <Products search={search} />
    </>
  );
}

export default ProductsPage;