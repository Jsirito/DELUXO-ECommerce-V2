import React from "react";

import styled from "styled-components";
import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { cartProducts } from "../../seed";
import { Add, Remove } from "@mui/icons-material";

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: 30px 40px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Product = styled.div`
  display: flex;
`;
export const ProductImage = styled.img`
  width: 150px;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  display: grid;
`;

export const ProductName = styled.p`
  margin: 0;
`;

export const ProductInputPrice = styled.input`
  width: 40px;
  height: 30px;
  padding: 5px;
`;

export const RemoveButton = styled.a`
  color: #ff523b;
  font-size: 12px;
  justify-content: flex-end;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 5px;
  color: #fff;
  background-color: #ff523b;
  font-weight: normal;
`;

export const TableDetails = styled.td`
  padding: 10px 5px;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

function ShoppingCart() {
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <ProductTable>
          <tr>
            <TableHeader>Product</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Subtotal</TableHeader>
          </tr>
          {cartProducts.map((product) => {
            return (
              <>
                <tr>
                  <TableDetails>
                    <Product>
                      <ProductImage src={product.img} alt="" />
                      <ProductInfo>
                        <ProductName>{product.name}</ProductName>
                        <small>$ {product.price}</small>
                        <br />
                        <RemoveButton href="">Remove</RemoveButton>
                      </ProductInfo>
                    </Product>
                  </TableDetails>
                  <TableDetails>
                    <ProductInputPrice
                      type="number"
                      value="1"
                    ></ProductInputPrice>
                  </TableDetails>
                  <TableDetails>$45.00</TableDetails>
                </tr>
                <Hr />
              </>
            );
          })}
        </ProductTable>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ShoppingCart;
