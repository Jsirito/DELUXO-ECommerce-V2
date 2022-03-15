import { Link } from "react-router-dom";

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

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Product({ product }) {
  return (
    <Container>
      <ImageContainer>
        <Image src={product.img} />
      </ImageContainer>
      <Icons>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Link to={`/product/${product._id}`}>
            <SearchIcon />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
      </Icons>
      <Description>
        <Info>
          <Name>{product.title}</Name>
          <Desc>{product.desc}</Desc>
        </Info>
        <Price>{product.price}</Price>
      </Description>
    </Container>
  );
}

export default Product;
