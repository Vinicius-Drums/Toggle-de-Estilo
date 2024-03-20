import React, { useEffect, useState } from "react";
import "./StyleToggle.tsx";

const StyleToggle: React.FC = () => {
  const [style, setStyle] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(style);
  }, [style]);

  const toggleStyle = () => {
    setStyle((prevStyle) => (prevStyle === "light" ? "dark" : "light"));
  };

  return (
    <div className="StyleToggle">
      <div className="banda-content">
        <h1>Banda Leão Livre</h1>
        <img
          src="src/Imagens/BandaLeaolivre.jpeg"
          alt="Banda Leão Livre"
          className="banda-imagem"
        />
      </div>
      <button onClick={toggleStyle}>Toggle Style &#127761;</button>
    </div>
  );
};

export default StyleToggle;
