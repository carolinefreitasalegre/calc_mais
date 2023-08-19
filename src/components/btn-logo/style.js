import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: #b10802;
  width: 11rem;
  height: 4rem;
  font-size: 3em;
  font-weight: bold;
  opacity: 1;
  transition: 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;
