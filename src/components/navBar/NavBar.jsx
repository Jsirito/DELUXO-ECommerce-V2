import React from "react";

import {
  Container,
  Wraper,
  Left,
  Center,
  Right,
  Lenguage,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./NavBarElements";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

function NavBar() {
  return (
    <Container>
      <Wraper>
        <Left>
          <Lenguage>EN</Lenguage>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: "var(--main-nav-cl)", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>DELUXO.</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
}

export default NavBar;
