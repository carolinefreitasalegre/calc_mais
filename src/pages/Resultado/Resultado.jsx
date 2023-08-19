import { Container, Content, Title, Text, Image, Result } from "./styles";
import ButtonGo from "../../components/button/ButtonGo";
import { ImcContext, ImcProvider } from "../../contexts/ImcContext";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import IMG from "../../../public/assets/tabela.png";


export default function Final() {
  const { nome, altura, peso, imc } = useContext(ImcContext);

  useEffect(() => {}, [nome, altura, peso, imc]); //ajustar aqui
  console.log(imc);

  return (
    <ImcProvider>
      <Container>
        <Title data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
          Olá {nome} seu IMC é: {imc}
        </Title>
        <Content>
          <Text>
            <Result>
              <p>Peso: {peso}</p>
              <p>Altura: {altura}</p>
            </Result>
            <Image src={IMG}/>
          </Text>
          <div style={{ margin: "15em 0 0 1em", zIndex: 1000 }}>
            <Link
              to="/"
              data-aos="zoom-out-right"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              <ButtonGo text="Página inicial" />
            </Link>
          </div>
        </Content>
      </Container>
    </ImcProvider>
  );
}
