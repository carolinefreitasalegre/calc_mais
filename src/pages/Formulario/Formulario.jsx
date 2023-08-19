import { Container, Content, Data, Text, Input, Title } from "./styles";
import ButtonGo from "../../components/button/ButtonGo";
import { ImcContext } from "../../contexts/ImcContext";
import { Link, useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";

export default function Form() {
  const { nome, altura, peso, setAltura, setPeso, setNome, setImc } =
    useContext(ImcContext);

  useEffect(() => {}, [nome, altura, peso, setImc]);

  function resultAltura(e) {
    const value = e.target.value;

    if (value.length > 0) {
      const add = value.replace(/,/g, "");

      const formatValue = add[0] + (add.length > 1 ? "," + add.slice(1) : "");

      setAltura(formatValue);
    }
  }

  function resultPeso(e) {
    const value = e.target.value;

    if (value.length > 0) {
      const add = value.replace(/[^0-9]/g, "");

      const formatValue = add
        .slice(0, -1)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      const resulValues = formatValue + "," + add.slice(-1);

      setPeso(resulValues);
    }
  }

  function resulName(e) {
    setNome(e.target.value);
  }

  const calcImc = (e) => {
    if (peso === 0 || altura === 0 || nome === "") {
      alert("Preencha o formulário corretamente!");
      e.preventDefault();
    }
    if (peso && altura) {
      const pesoRes = parseFloat(peso.replace(",", "."));
      const alturaRes = parseFloat(altura.replace(",", "."));

      if (pesoRes && alturaRes && alturaRes !== 0) {
        const res = pesoRes / (alturaRes * alturaRes);
        setImc(res.toFixed(2));
      } else {
        setImc(null);
      }
    }
  };

  return (
    <>
      <Container>
        <Content>
          <Title
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            Digite seus dados
          </Title>
          <Data>
            <Text>Nome</Text>
            <Input
              type="text"
              required
              value={nome}
              onChange={resulName}
              maxLength={10}
            />
          </Data>
          <Data>
            <Text>Altura</Text>
            <Input
              value={altura}
              onChange={resultAltura}
              maxLength={4}
              required
              type="text"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </Data>
          <Data>
            <Text>Peso</Text>
            <Input
              required
              value={peso}
              onChange={resultPeso}
              maxLength={4}
              type="text"
              onInput={(e) =>
                (e.target.value = e.target.value.replace(/[^0-9]/g, ""))
              }
            />
          </Data>

          <Link
            onClick={calcImc}
            to="/resultado"
            data-aos="zoom-out-right"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <ButtonGo text="Calcular" />
          </Link>
        </Content>
      </Container>
    </>
  );
}
