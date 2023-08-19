import Logo from "../../components/btn-logo/Logo";
import ButtonGo from "../../components/button/ButtonGo";
import { Container, Content, Title, Divisor } from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Content>
        <Divisor>
          <Logo
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <Title
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            Seu medidor de IMC
          </Title>
        </Divisor>

        <Link
          to="/formulario"
          data-aos="zoom-out-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <ButtonGo text="Clique para começar" />
        </Link>
      </Content>
    </Container>
  );
}
