import styled from "styled-components";

export const GoButton = styled.button`
  cursor: pointer;
  width: 23em;
  height: 3em;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: #b10802;
  text-transform: uppercase;
  font-weight: 700;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: all 0.5s;

  .arrow {
    margin-left: 1em;
    display: none;
    font-size: 1.2em;
    color: red;
  }

  &:hover {
    box-shadow: 2px 2px 15px grey;
    margin-left: -1em;
    color: green;

    .arrow {
      display: flex;
    }
  }
`;
