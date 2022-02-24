import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  /* display: flex; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 10px;
  ${tablet({ fontSize: "18px" })}
`;

export const ImageContainer = styled.div`
  padding: 20px;
`;

export const Image = styled.img`
  width: 90%;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  padding: 0px 20px;
`;

export const ProductName = styled.h1`
  font-weight: 200;
`;

export const ProductDescription = styled.p`
  margin: 20px 0px;
`;

export const ProductPrice = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 2px;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

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

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  color: var(--main-slider-cl);
  border-color: var(--main-slider-cl);
`;
