import React from "react";
import "./blog_Home.css";
import { useTheme } from "../../Utils/theme-context";

const BlogHome: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`container ${theme}`}>
      <div className={`box-container ${theme}`}>
        <h2>Blog</h2>
        <div className="boxes">
          <div className={`box ${theme}`}>
            <h1>Criando um sistema de design do zero</h1>
            <div className="box-info">
              <h2>12 Fev 2030</h2>
              <h2>Design, Padrões</h2>
            </div>
            <p>
              Neste artigo, exploramos como criar um sistema de design do zero,
              abordando desde a definição de componentes reutilizáveis até a
              implementação em projetos reais.
            </p>
          </div>
          <div className={`box ${theme}`}>
            <h1>Criando ícones perfeitos no Figma</h1>
            <div className="box-info">
              <h2>15 Fev 2030</h2>
              <h2>Figma, Design de Ícones</h2>
            </div>
            <p>
              Aprenda como criar ícones pixel-perfect no Figma, garantindo
              consistência e qualidade em seus projetos de design.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
