import styled from "styled-components";
import { mobile } from "../../responsive";


export const Container = styled.footer`
  display: flex;
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  background-color: var(--main-foot-bg-active);
  color: var(--main-foot-cl);
  ${mobile({flexDirection: 'column'})}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Description = styled.p`
  max-width: 500px;
  margin: 10px 0px;
  overflow: hidden;
`;

export const SocialMediaIconsContainer = styled.div`
  display: flex;
`;

export const SocialMediaIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
`;

// export const Center = styled.div`
//   flex: 1;
//   padding: 20px;
// `;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  cursor: pointer;
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const Payment = styled.img`
  width: 40%;
`;
