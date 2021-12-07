import React from "react";

import CategoryItem from "../categoryItem/CategoryItem";

import { Container } from "./CategoriesElements";

import { categories } from "../../seed";

function Categories() {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id}/>
      ))}
    </Container>
  );
}

export default Categories;
