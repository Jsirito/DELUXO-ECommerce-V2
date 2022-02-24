import React from "react";

import {
  Container,
  Left,
  Center,
  Right,
  Logo,
  Description,
  SocialMediaIconsContainer,
  SocialMediaIcon,
  Title,
  List,
  ListItem,
  ContactItem,
  Payment,
} from "./FooterElements";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>DELUXO</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          perspiciatis expedita provident, veritatis voluptatum quo est
          delectus, accusamus aut voluptas tenetur dicta soluta porro. Animi
          repudiandae veritatis dolore maiores omnis?
        </Description>
        <SocialMediaIconsContainer>
          <SocialMediaIcon color="385999">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon color="E4405F">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon color="55ACEE">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon color="E60023">
            <PinterestIcon />
          </SocialMediaIcon>
        </SocialMediaIconsContainer>
      </Left>
      {/* <Center>
        <Title>Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man</ListItem>
          <ListItem>Woman</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>WhisList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center> */}
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomOutlinedIcon style={{ marginRight: "10px" }} /> 742 Av. Siempre
          Viva, SpringField 45554
        </ContactItem>
        <ContactItem>
          <PhoneIphoneOutlinedIcon style={{ marginRight: "10px" }} /> +54 911
          4555 2322
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} /> info@deluxo.com
        </ContactItem>
        <Payment src="https://www.clipartmax.com/png/full/175-1758053_we-accept-credit-cards-all-major-credit-cards-accepted.png" />
      </Right>
    </Container>
  );
}

export default Footer;
