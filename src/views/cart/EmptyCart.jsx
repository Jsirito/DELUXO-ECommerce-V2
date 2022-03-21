import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Footer from "../../components/footer/Footer";
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
  TableHeader,
  TableDetails,
  Summary,
  SummaryTable,
  AmountContainer,
  Amount,
} from "./ShoppingCartElementsV2";

function EmptyCart() {
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
              <AmountContainer>
                <RemoveIcon style={{ cursor: "pointer" }} />
                <Amount>0</Amount>
                <AddIcon style={{ cursor: "pointer" }} />
              </AmountContainer>
            </TableDetails>
            <TableDetails>$0.00</TableDetails>
          </tr>
        </ProductTable>
        <Summary>
          <SummaryTable>
            <tr>
              <TableDetails>Subtotal</TableDetails>
              <TableDetails>$ 0</TableDetails>
            </tr>
            <tr>
              <TableDetails>Taxes (21%)</TableDetails>
              <TableDetails>$ 0</TableDetails>
            </tr>
            <tr>
              <TableDetails>Total</TableDetails>
              <TableDetails>$ 0</TableDetails>
            </tr>
          </SummaryTable>
        </Summary>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default EmptyCart;
