import styled from "styled-components";

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
`;

export const ProductName = styled.p`
  margin: 0;
`;

export const ProductInputPrice = styled.input`
  width: 40px;
  height: 30px;
  padding: 5px;
`;

export const RemoveButton = styled.a`
  color: #ff523b;
  font-size: 12px;
  justify-content: flex-end;
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
  max-width: 350px;
`;
