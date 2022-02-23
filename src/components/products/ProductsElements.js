import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  display: grid;
  grid-auto-flow: dense;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
