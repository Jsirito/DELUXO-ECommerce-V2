import React, { useState } from "react";
import { NavBarContext } from "./navBarContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const cartQuantity = useSelector((state) => state.cart.quantity);

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
            <SearchContainer>
              <Input placeholder="Search " />
              <SearchIcon
                style={{ color: "var(--main-nav-cl)", fontSize: 25 }}
              />
            </SearchContainer>
          </Left>
          <Center>
            <Link to={"/"}>
              <Logo>DELUXO.</Logo>
            </Link>
          </Center>
          <Right>
            <MenuItem onClick={handleIsOpen}>LogIn</MenuItem>
            <MenuItem>
              <Link to={"/cart"}>
                <Badge badgeContent={cartQuantity} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </Link>
            </MenuItem>
          </Right>
        </Wraper>
        <Modal isOpen={isOpen} type={type} onClose={() => setIsOpen(false)} />
      </Container>
    </NavBarContext.Provider>
  );
}

export default NavBar;
