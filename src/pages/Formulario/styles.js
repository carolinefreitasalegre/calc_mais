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
`;
export const Title = styled.h1`
  color: white;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const Text = styled.h5`
  text-transform: capitalize;
  display: flex;
  width: 120%;
  justify-content: end;
  color: orange;
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
`;
