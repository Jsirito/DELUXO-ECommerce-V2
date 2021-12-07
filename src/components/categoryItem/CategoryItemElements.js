import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: var(--main-cat-cl);
  border-color: var(--main-cat-cl);
  cursor: pointer;
  font-weight: 600;
`;
