import styled from "styled-components";
import banner from "../../../public/assets/one.jpg";

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
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    margin: auto;
  }
`;

export const Content = styled.form`
  background-color: rgba(255, 255, 255, 0.18);
  box-shadow: 2px 2px 15px grey;
  height: 70%;
  min-width: 30%;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  border-radius: 2px;
  padding: 0 2em;

  a {
    text-decoration: none;
  }

  @media (max-width: 760px) {
    width: 70%;
    margin-left: 0;
    margin-right: 3em;
    font-size: 1em;
  }

  @media (max-width: 370px) {
    width: 60%;
    margin-left: 0;
    margin-right: 3em;
    font-size: 1em;
    box-shadow: none;

    Button {
      width: 110%;
    }
  }
`;
export const Divisor = styled.div`
  color: white;
  font-weight: 700;
`;
export const Title = styled.h1`
  color: white;
  font-weight: 700;
`;
