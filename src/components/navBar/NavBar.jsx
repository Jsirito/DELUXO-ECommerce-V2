import React, { useState } from "react";
import { NavBarContext } from "./navBarContext";

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

import Modal from "../modal/Modal";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("logIn");

  const changeTypeToSignUp = () => {
    setType("signIn");
  };

  const changeTypeToLogIn = () => {
    setType("logIn");
  };

  const changeIsOpenToTrue = () => {
    setIsOpen(true);
  };

  const handleIsOpen = () => {
    changeTypeToLogIn();
    changeIsOpenToTrue();
  };

  const contextValue = { changeTypeToLogIn, changeTypeToSignUp };

  return (
    <NavBarContext.Provider value={contextValue}>
      <Container>
        <Wraper>
          <Left>
            <Lenguage>EN</Lenguage>
            <SearchContainer>
              <Input />
              <SearchIcon
                style={{ color: "var(--main-nav-cl)", fontSize: 25 }}
              />
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
            <MenuItem onClick={handleIsOpen}>LogIn</MenuItem>
          </Right>
        </Wraper>
        <Modal isOpen={isOpen} type={type} onClose={() => setIsOpen(false)} />
      </Container>
    </NavBarContext.Provider>
  );
}

export default NavBar;
