import React from "react";
import { Link } from "react-router-dom";

import { Container, Image, Title, Info, Button } from "./CategoryItemElements";

function CategoryItem({ category }) {
  return (
    <Container>
      <Link to={`/products/${category.cat}`}> 
        <Image src={category.img} />
        <Info>
          <Title>{category.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
}

export default CategoryItem;
