import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  height: 30px;
  background-color: var(--main-ann-cl);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}
`;
