import React from "react";

import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  InfoContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Add,
  Remove,
  Amount,
  Button,
} from "./SingleProductElement";

function SingleProduct() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://scene7.zumiez.com/is/image/zumiez/product_main_medium_2x/Broken-Promises-x-Hot-Stuff-Chillax-Gold-Hoodie-_342621-front-US.jpg" />
        </ImageContainer>
        <InfoContainer>
          <ProductName>
            Broken Promises Could Be Different Orange Hoodie
          </ProductName>
          <ProductDescription>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
            recusandae quis, dolorum iure quasi necessitatibus dolore.
            Dignissimos, repellendus. Libero, incidunt.
          </ProductDescription>
          <ProductPrice>$10</ProductPrice>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="green"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default SingleProduct;
