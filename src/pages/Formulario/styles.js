import styled from "styled-components";
import banner from "../../../public/assets/two.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const Content = styled.form`
  background-color: rgba(255, 255, 255, 0.18);
  box-shadow: 2px 2px 15px grey;
  height: 70%;
  width: 30%;
  margin-left: 30%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  gap: 40px;
  text-align: justify;

  a {
    text-decoration: none;
  }

  @media (max-width: 1008px) {
    margin: auto;
    height: 100%;
    width: 100%;
    font-size: 0.8em;
    background-color: rgba(255, 255, 255, 0.7);

    Button {
      background-color: orange;
      width: 17em;
      margin-left: -3em;
    }
  }
`;
export const Title = styled.h1`
  color: white;

  @media (max-width: 1008px) {
    color: orange;
    margin-left: -1em;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  @media (max-width: 1008px) {
    width: 50%;
  }
`;

export const Text = styled.h5`
  text-transform: capitalize;
  display: flex;
  width: 120%;
  justify-content: end;
  color: orange;

  @media (max-width: 1008px) {
    margin-left: -6em;
  }
`;

export const Input = styled.input`
  outline: none;
  text-transform: capitalize;
  height: 2em;
  width: 118%;
  box-shadow: 2px 2px 10px grey;
  padding: 0 7px;
  color: green;
  font-size: 1.1em;
  border: none;
  text-align: end;

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0;
    margin-right: 3em;
    font-size: 1em;
  }
`;
