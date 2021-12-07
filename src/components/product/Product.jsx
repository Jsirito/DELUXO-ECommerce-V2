import React from "react";

import {
  Container,
  Description,
  Desc,
  Image,
  Icons,
  Icon,
  Info,
  Name,
  ImageContainer,
  Price,
} from "./ProductElements";

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Product({ singleProduct }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={singleProduct.img} />
      </ImageContainer>
      <Icons>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Icons>
      <Description>
        <Info>
          <Name>{singleProduct.name}</Name>
          <Desc>{singleProduct.desc}</Desc>
        </Info>
        <Price>{singleProduct.price}</Price>
      </Description>
    </Container>
  );
}

export default Product;
