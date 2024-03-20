// StyleToggle.tsx

import React, { useEffect, useState } from "react";
import "./StyleToggle.css"; // Importa o arquivo de estilos associado ao componente

// Definição do componente funcional StyleToggle
const StyleToggle: React.FC = () => {
  const [style, setStyle] = useState<"light" | "dark">("light"); // Define o estado 'style' para controlar o tema da aplicação

  // Efeito para atualizar as classes no corpo do documento baseado no estilo selecionado
  useEffect(() => {
    document.body.classList.remove("light", "dark"); // Remove classes de tema anteriores
    document.body.classList.add(style); // Adiciona a classe do tema selecionado
  }, [style]);

  // Função para alternar entre os estilos
  const toggleStyle = () => {
    setStyle((prevStyle) => (prevStyle === "light" ? "dark" : "light")); // Alterna entre os temas light e dark
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
      <button onClick={toggleStyle}>Toggle Style &#127761;</button> {/* Botão para alternar entre os estilos */}
    </div>
  );
};

export default StyleToggle; // Exporta o componente StyleToggle para ser utilizado em outros arquivos
