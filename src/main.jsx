import React from "react";
import ReactDOM from "react-dom/client";
import "./GlobalStyles.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Formulario from "./pages/Formulario/Formulario.jsx";
import Resultado from "./pages/Resultado/Resultado.jsx";
import { ImcProvider } from "./contexts/ImcContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImcProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>
      </BrowserRouter>
    </ImcProvider>
  </React.StrictMode>
);
