import React from "react";
import {useSelector} from "react-redux"

import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";

import { cartProducts } from "../../seed";

import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  BottomButton,
  BottomTexts,
  BottomText,
  Info,
  Summary,
  Product,
  ProductDetail,
  ProductImage,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetails,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Hr,
} from "./ShoppingCartElements";
import { Add, Remove } from "@mui/icons-material";
function ShoppingCart() {
  const cart = useSelector(state=>state.cart);
  console.log(cart)
  return (
    <Container>
      <Announcement />
      <NavBar />
      <Wrapper>
        <Title>Shopping Cart</Title>
        <Top>
          <Info>
            {cartProducts.map((cartProduct) => (
              <Container>
                <Product>
                  <ProductDetail>
                    <ProductImage src={cartProduct.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {cartProduct.name}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> # {cartProduct.id}
                      </ProductId>
                      {/* <ProductColor color={cartProduct.color} /> */}
                      <ProductSize>
                        <b>Size:</b> 12
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetails>
                    <ProductAmountContainer>
                      <Add />
                      <ProductAmount>1</ProductAmount>
                      <Remove />
                    </ProductAmountContainer>
                    <ProductPrice>${cartProduct.price}</ProductPrice>
                  </PriceDetails>
                </Product>
                <Hr />
              </Container>
            ))}
          </Info>
        </Top>
        <Bottom>
          {/* <Summary>Summary</Summary> */}
          <BottomButton>Continue Shopping</BottomButton>
          {/* <BottomTexts>
            <BottomText>Shopping Bag (2)</BottomText>
            <BottomText>Your Wishlist (0)</BottomText>
          </BottomTexts> */}
          <BottomButton type="filled">CheckOut Now</BottomButton>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ShoppingCart;
