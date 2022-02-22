import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
`;

export const Info = styled.div`
  flex: 3;
`;

export const Summary = styled.div`
  flex: 1;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height:100px;
`;

export const ProductDetail = styled.div`
  display: flex;
`;

export const ProductImage = styled.img`
  width: auto;
`;

export const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 27  0px;
`;

export const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 20px;
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

export const Bottom = styled.div`
  display: flex;
  /* align-items: center; */
  padding: 20px;
  justify-content: space-around;
`;

export const BottomButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

export const BottomTexts = styled.div``;

export const BottomText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
