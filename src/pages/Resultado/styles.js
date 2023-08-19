import styled from "styled-components";
import banner from "../../../public/assets/three.jpg";
import balanca from "../../../public/assets/balanca.png";

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

export const Title = styled.h1`
  width: 30%;
  margin: 0 0 2em 15em;
  text-align: center;
  color: orange;
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

  &::before {
    border-radius: 20px;

    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  a {
    text-decoration: none;
  }
`;

export const Text = styled.div`
  position: absolute;
  top: 40%;
  left: 0%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2em 0 2em 15em;
  text-align: center;
  color: green;
`;

export const Image = styled.img`
  margin-left: -1.5em;
  box-shadow: 2px 2px 10px black;
  width: 88%;
  opacity: 0.7;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  padding-bottom: 5px;
  width: 92%;
`;
