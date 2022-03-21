import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeProduct,
  decreaseProduct,
  increaseProduct,
} from "../../redux/cartRedux";

import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import EmptyCart from "./EmptyCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import {
  Container,
  Wrapper,
  ProductTable,
  Product,
  ProductImage,
  ProductInfo,
  ProductName,
  RemoveButton,
  TableHeader,
  TableDetails,
  Hr,
  Summary,
  SummaryTable,
  AmountContainer,
  Amount,
} from "./ShoppingCartElementsV2";

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeCartItem = (id, price, quantity) => {
    const products = cart.product.filter((product) => product._id !== id);
    dispatch(removeProduct({ products, price, quantity }));
  };

  function decreaseCartItem(product, price) {
    const cartCopy = [];
    cart.product.forEach((product) => {
      cartCopy.push({ ...product });
    });
    cartCopy.forEach((copyProduct) => {
      if (copyProduct._id == product._id) {
        if (copyProduct.quantity === 1) return;
        if (copyProduct.quantity > 1) {
          copyProduct.quantity -= 1;
          dispatch(decreaseProduct({ cartCopy, price }));
        }
      }
    });
  }

  function increaseCartItem(product, price) {
    const cartCopy = [];
    cart.product.forEach((product) => {
      cartCopy.push({ ...product });
    });
    cartCopy.forEach((copyProduct) => {
      if (copyProduct._id == product._id) {
        copyProduct.quantity += 1;
        dispatch(increaseProduct({ cartCopy, price }));
      }
    });
  }

  if (!cart.product.length) return <EmptyCart />;

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
                        <ProductName>{product.title}</ProductName>
                        <small>$ {product.price}</small>
                      </ProductInfo>
                    </Product>
                  </TableDetails>
                  <TableDetails>
                    <AmountContainer>
                      <RemoveIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => decreaseCartItem(product, product.price)}
                      />
                      <Amount>{product.quantity}</Amount>
                      <AddIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => increaseCartItem(product, product.price)}
                      />
                    </AmountContainer>
                    <br />
                    <RemoveButton
                      onClick={() =>
                        removeCartItem(
                          product._id,
                          product.price,
                          product.quantity
                        )
                      }
                    >
                      Remove
                    </RemoveButton>
                  </TableDetails>
                  <TableDetails>
                    $ {product.price * product.quantity}
                  </TableDetails>
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
              <TableDetails>Taxes (21%)</TableDetails>
              <TableDetails>
                $ {(cart.totalPrice * 0.21).toFixed(2)}
              </TableDetails>
            </tr>
            <tr>
              <TableDetails>Total</TableDetails>
              <TableDetails>
                $ {(cart.totalPrice * 0.21 + cart.totalPrice).toFixed(2)}
              </TableDetails>
            </tr>
          </SummaryTable>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default ShoppingCart;
