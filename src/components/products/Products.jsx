import { useState, useEffect } from "react";
import axios from "axios";

import { Container } from "./ProductsElements";
import Product from "../product/Product";

function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await axios.get(
          cat
            ? `http://localhost:3001/api/products/findAllProducts?category=${cat}`
            : "http://localhost:3001/api/products/findAllProducts"
        );
        setProducts(fetchedProducts.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterdProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <Product product={product} key={product.id} />
            ))}
    </Container>
  );
}

export default Products;
