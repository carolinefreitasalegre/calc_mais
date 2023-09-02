import styled from "styled-components";
import banner from "../../../public/assets/three.jpg";
import balanca from "../../../public/assets/balanca.png";

export const Container = styled.div`
  height: 90vh;
  min-height: 100vh;
  min-width: 100%;
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

  @media (max-width: 800px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  width: 30%;
  margin: 0 0 2em 15em;
  text-align: center;
  color: orange;

  @media (max-width: 1026px) {
    margin-left: 0;
  }
`;
export const Content = styled.form`
  position: relative;
  height: 60vh;
  width: 30%;
  opacity: 0.5;
  background-image: url(${balanca});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px grey;
  border-radius: 20px;
  margin-left: 30em;
  overflow: hidden;

  &::before {
    border-radius: 20px;

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  a {
    text-decoration: none;
  }

  Button {
    margin-left: -1em;
    width: 25em;
  }

  @media (max-width: 1026px) {
    min-width: 50%;
    background-position: center;
    margin-left: 0;

    Button {
      width: 31em;
    }
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 42%;
  left: -0%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 91%;
  height: 92%;
  border-radius: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0 2em 15em;
  text-align: center;
  color: green;

  @media (max-width: 1026px) {
    margin-left: 18em;
  }
`;

export const Image = styled.img`
  margin-right: 4em;
  box-shadow: 2px 2px 10px black;
  width: 88%;

  opacity: 1;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  padding-bottom: 5px;
  width: 92%;
`;
