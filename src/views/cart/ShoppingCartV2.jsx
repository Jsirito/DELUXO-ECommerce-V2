import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartRedux";

import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EmptyCart from "./EmptyCart";

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

  const handleRemoveCartItem = async (id, price) => {
    const products = cart.product.filter((product) => product._id !== id);
    dispatch(removeProduct({ products, price }));
  };

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
                        <br />
                        <RemoveButton
                          onClick={() =>
                            handleRemoveCartItem(product._id, product.price)
                          }
                        >
                          Remove
                        </RemoveButton>
                      </ProductInfo>
                    </Product>
                  </TableDetails>
                  <TableDetails>
                    <AmountContainer>
                      <RemoveIcon style={{ cursor: "pointer" }} />
                      <Amount>{product.quantity}</Amount>
                      <AddIcon style={{ cursor: "pointer" }} />
                    </AmountContainer>
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
