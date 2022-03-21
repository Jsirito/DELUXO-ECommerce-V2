import styled from "styled-components";
import { mobile, tablet } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: 30px 40px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Product = styled.div`
  display: flex;
`;
export const ProductImage = styled.img`
  width: 100px;
  margin-right: 10px;
`;

export const ProductInfo = styled.div`
  display: grid;
  ${tablet({ fontSize: "15px" })}
  ${mobile({ display: "none" })}
`;

export const ProductName = styled.p`
  margin: 0;
`;

export const ProductInputPrice = styled.input`
  width: 40px;
  height: 30px;
  padding: 5px;
`;

export const RemoveButton = styled.button`
  color: #ff523b;
  font-size: 12px;
  border: none;
  background-color: white;
  width: 60px;
  cursor: pointer;
  margin-left: 14px;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 3px 10px;
  color: #fff;
  background-color: #ff523b;
  font-weight: normal;
  :last-of-type {
    text-align: right;
  }
`;

export const TableDetails = styled.td`
  padding: 10px 5px;
  :last-of-type {
    text-align: right;
  }
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Summary = styled.table`
  display: flex;
  justify-content: flex-end;
`;
export const SummaryTable = styled.table`
  border-top: 3px solid #ff523b;
  width: 100%;
  max-width: 360px;
`;

export const AddContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid var(--main-slider-cl);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
