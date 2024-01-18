import React from "react";
import StyleToggle from "./components/StyleToggle";
import "./app.css"; // Importa o arquivo de estilos do aplicativo

const App: React.FC = () => {
  return (
    <div>
      <h1>Banda Leão Livre</h1>
      <br></br>

      <StyleToggle />
    </div>
  );
};

export default App;
