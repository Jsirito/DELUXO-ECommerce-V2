import { Category } from "@mui/icons-material";
import React from "react";

import { Container, Image, Title, Info, Button } from "./CategoryItemElements";

function CategoryItem({ category }) {
  return (
    <Container>
      <Image src={category.img} />
      <Info>
        <Title>{category.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
