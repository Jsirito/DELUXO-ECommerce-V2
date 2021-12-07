import React from "react";
import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import Products from "../../components/products/Products";

import {
  Container,
  FilterContainer,
  Filter,
  Title,
  FilterText,
  Select,
  Option,
} from "./ProductListElements";

function ProductList() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Title>Jackets</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disable selected>
              Color
            </Option>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
            <Option>Option 5</Option>
            <Option>Option 6</Option>
          </Select>
          <Select>
            <Option disable selected>
              Size
            </Option>
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
            <Option>Option 4</Option>
            <Option>Option 5</Option>
            <Option>Option 6</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option disable selected>
              Sort By
            </Option>
            <Option>Size</Option>
            <Option>Color</Option>
            <Option>Price</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Footer />
    </Container>
  );
}

export default ProductList;
