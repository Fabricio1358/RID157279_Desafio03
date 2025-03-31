import React from "react";
import "./blog.css";
import { useTheme } from "../../Utils/theme-context";

const Blog: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const posts = [
    {
      titulo: "Criando um sistema de design do zero",
      data: "12 Fev 2030",
      categoria: "Design, Padrões",
      descricao:
        "Neste artigo, exploramos como criar um sistema de design do zero, abordando desde a definição de componentes reutilizáveis até a implementação em projetos reais.",
      imagem: "../../../assets/home-projetos1.png",
    },
    {
      titulo: "Criando ícones perfeitos no Figma",
      data: "15 Fev 2030",
      categoria: "Figma, Design de Ícones",
      descricao:
        "Aprenda como criar ícones pixel-perfect no Figma, garantindo consistência e qualidade em seus projetos de design.",
      imagem: "../../../assets/home-projetos2.png",
    },
    {
      titulo: "36 Dias de Tipografia Malayalam",
      data: "20 Fev 2030",
      categoria: "Tipografia",
      descricao:
        "Uma jornada criativa explorando a tipografia Malayalam, com foco em formas inovadoras e representações artísticas de cada caractere.",
      imagem: "../../../assets/home-projetos3.png",
    },
  ];

  return (
    <div className={`blog-container ${theme}`}>
      <h1>Blog</h1>
      <div className="blog-list">
        {posts.map((post, index) => (
          <div key={index} className={`blog-item ${theme}`}>
            <div className="blog-img">
              <img src={post.imagem} alt={post.titulo} />
            </div>
            <div className={`blog-info ${theme}`}>
              <h2>{post.titulo}</h2>
              <div className={`blog-meta ${theme}`}>
                <span>{post.data}</span>
                <span>{post.categoria}</span>
              </div>
              <p>{post.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
