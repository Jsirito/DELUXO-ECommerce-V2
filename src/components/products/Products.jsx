import React from "react";

import { Container } from "./ProductsElements";

import Product from "../product/Product";

import { products } from "../../seed";

function Products() {
  return (
    <Container>
      {products.map((singleProduct) => (
        <Product singleProduct={singleProduct} key={singleProduct.id} />
      ))}
    </Container>
  );
}

export default Products;
