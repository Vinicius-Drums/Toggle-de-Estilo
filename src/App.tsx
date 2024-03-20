// App.tsx

import React from "react";
import StyleToggle from "./components/StyleToggle"; // Importa o componente StyleToggle
import "./app.css"; // Importa o arquivo de estilos do aplicativo

// Definição do componente funcional App
const App: React.FC = () => {
  return (
    <div>
      <h1>Banda Leão Livre</h1> {/* Título do aplicativo */}
      <br></br>

      <StyleToggle /> {/* Renderiza o componente StyleToggle */}
    </div>
  );
};

export default App; // Exporta o componente App para ser utilizado em outros arquivos
