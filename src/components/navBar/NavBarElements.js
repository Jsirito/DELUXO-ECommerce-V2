import styled from "styled-components";

export const Container = styled.div`
  color: var(--main-nav-cl);
`;

export const Wraper = styled.div`
  padding: 0px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--main-nav-bg-active);
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const Lenguage = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

export const SearchContainer = styled.span`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  background-color: var(--main-nav-bg-active);
  color: white;
`;

export const Center = styled.div`
  flex: 1;
  text-align: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
