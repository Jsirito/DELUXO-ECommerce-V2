import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  color: var(--main-nav-cl);
  background-color: var(--main-nav-bg-active);
`;

export const Wraper = styled.div`
  padding: 10px 20px;
  height: 60px;
  display: grid;
  align-content: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-start;

`;

// export const Lenguage = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;

export const SearchContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ margin: "10px" })}
`;

export const Input = styled.input`
  width: 150px;
  background-color: var(--main-nav-bg-active);
  color: white;
  ${mobile({ width: "50px" })}
`;

export const Center = styled.div`
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "30px" })}
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 25px;
`;
