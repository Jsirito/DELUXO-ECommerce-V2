import styled from "styled-components";

export const Icons = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

export const Container = styled.div`
  background: #fff;
  max-width: 300px;
  min-width: 280px;
  position: relative;
  z-index: 15;
  margin: 10px auto;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  &:hover ${Icons} {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--main-prod-cl);
    transform: scale() (1.1);
  }
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  max-width: 100%;
`;

export const Description = styled.div`
  position: relative;
  z-index: 15;
  background: #fff;
  /* @extend %clearfix; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.div`
  padding: 15px;
  font-size: 0.85em;
  width: 75%;
  float: left;
`;

export const Name = styled.div`
  font-size: 15px;
  margin: 0 0 5px;
  max-height: 50px;
  overflow: hidden;
`;

export const Desc = styled.div`
  margin-bottom: 10px;
  color: #aaa;
  max-height: 50px;
  overflow: hidden;
`;

export const Price = styled.div`
  width: 25%;
  color: var(--main-prod-cl);
  font-size: 2em;
  position: relative;

  &::before {
    content: "$";
    position: absolute;
    top: 0;
    left: -10px;
    font-size: 0.35em;
  }
`;
