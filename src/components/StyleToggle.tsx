// Importa os módulos necessários do React
import React, { useEffect, useState } from "react";

// Importa o arquivo de estilos associado ao componente
import "./StyleToggle.css";

// Definição do componente funcional StyleToggle
const StyleToggle: React.FC = () => {
  // Define o estado 'style' para controlar o tema da aplicação usando o useState
  const [style, setStyle] = useState<"light" | "dark">("light");

  //  estamos usando o useEffect para atualizar as classes no corpo do documento baseado no estilo selecionado
  useEffect(() => {
    // Remove as classes de tema anteriores e adiciona a classe do tema selecionado ao corpo do documento
    document.body.classList.remove("light", "dark");
    document.body.classList.add(style);
  }, [style]); // Dispara o efeito sempre que o estilo for alterado

  // Esta função é responsável por alternar entre os estilos
  const toggleStyle = () => {
    // Alterna entre os temas light e dark ao clicar no botão
    setStyle((prevStyle) => (prevStyle === "light" ? "dark" : "light"));
  };

  // Renderização do componente
  return (
    <div className="StyleToggle">
      <div className="banda-content">
        <h1>Banda Leão Livre</h1> {/* Título do aplicativo */}
        <img
          src="src/Imagens/BandaLeaolivre.jpeg"
          alt="Banda Leão Livre"
          className="banda-imagem"
        /> {/* Imagem da banda */}
      </div>
      <button onClick={toggleStyle}>
        {/* Botão para alternar entre os estilos com um ícone */}
        Toggle Style &#127761;
      </button> 
    </div>
  );
};

// Exporta o componente StyleToggle para ser utilizado em outros arquivos
export default StyleToggle;
