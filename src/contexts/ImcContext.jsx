import { createContext, useState } from "react";

const ImcContext = createContext();

const ImcProvider = ({ children }) => {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [nome, setNome] = useState("");
  const [imc, setImc] = useState(null);

  return (
    <ImcContext.Provider
      value={{ altura, setAltura, peso, setPeso, nome, setNome, imc, setImc }}
    >
      {children}
    </ImcContext.Provider>
  );
};

export { ImcContext, ImcProvider };
