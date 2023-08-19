import styled from "styled-components";
import banner from "../../../public/assets/one.jpg";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-image:  url(${banner});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-evenly;
  border-radius: 2px;

  a {
    text-decoration: none;
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
