import React from "react";
import { useSelector } from "react-redux";

import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import { cartProducts } from "../../seed";
import { Add, Remove } from "@mui/icons-material";

import {
  Container,
  Wrapper,
  ProductTable,
  Product,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductInputPrice,
  RemoveButton,
  TableHeader,
  TableDetails,
  Hr,
  Summary,
  SummaryTable,
} from "./ShoppingCartElementsV2";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  if (!cart.product.length)
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
            <tr>
              <TableDetails>
                <Product>
                  <ProductImage src="" alt="" />
                  <ProductInfo>
                    <ProductName>No product</ProductName>
                  </ProductInfo>
                </Product>
              </TableDetails>
              <TableDetails>
                <ProductInputPrice type="number" value="0"></ProductInputPrice>
              </TableDetails>
              <TableDetails>$0.00</TableDetails>
            </tr>
            <p>Please Add some products to the Cart</p>
          </ProductTable>
        </Wrapper>
        <Footer />
      </Container>
    );

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
          {cart.product.map((product) => {
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
                      value={product.quantity}
                    ></ProductInputPrice>
                  </TableDetails>
                  <TableDetails>$ {product.price * product.quantity}</TableDetails>
                </tr>
                <Hr />
              </>
            );
          })}
        </ProductTable>
        <Summary>
          <SummaryTable>
            <tr>
              <TableDetails>Subtotal</TableDetails>
              <TableDetails>$ {cart.totalPrice}</TableDetails>
            </tr>
            <tr>
              <TableDetails>Tax</TableDetails>
              <TableDetails>$ {cart.totalPrice * 0.21}</TableDetails>
            </tr>
            <tr>
              <TableDetails>Total</TableDetails>
              <TableDetails>$ {(cart.totalPrice * 0.21 + cart.totalPrice).toFixed(2)}</TableDetails>
            </tr>
          </SummaryTable>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ShoppingCart;
