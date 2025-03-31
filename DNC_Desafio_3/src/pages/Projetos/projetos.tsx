import React from "react";
import "./projetos.css";
import { useTheme } from "../../Utils/theme-context";

const Projetos: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const projetos = [
    {
      titulo: "Designing Dashboards",
      data: "12 Fev 2030",
      categoria: "Design, Padrões",
      descricao:
        "Este projeto foi desenvolvido para criar dashboards interativos e intuitivos, utilizando tecnologias modernas como React e D3.js. O objetivo é facilitar a análise de dados em tempo real.",
      imagem: "../../../assets/home-projetos1.png",
    },
    {
      titulo: "Vibrant Portraits of 2020",
      data: "15 Fev 2030",
      categoria: "Fotografia",
      descricao:
        "Uma coleção de retratos vibrantes que exploram a diversidade cultural e emocional, capturando momentos únicos com técnicas avançadas de fotografia.",
      imagem: "../../../assets/home-projetos2.png",
    },
    {
      titulo: "36 Days of Malayalam Type",
      data: "20 Fev 2030",
      categoria: "Tipografia",
      descricao:
        "Um projeto criativo que celebra a beleza da escrita Malayalam, explorando formas inovadoras e artísticas para representar cada caractere do alfabeto.",
      imagem: "../../../assets/home-projetos3.png",
    },
  ];

  return (
    <div className={`projetos-container ${theme}`}>
      <h1>Projetos</h1>
      <div className="projetos-list">
        {projetos.map((projeto, index) => (
          <div key={index} className={`projeto-item ${theme}`}>
            <div className={`projeto-img ${theme}`}>
              <img src={projeto.imagem} alt={projeto.titulo} />
            </div>
            <div className={`projeto-info ${theme}`}>
              <h2>{projeto.titulo}</h2>
              <p><strong>Data:</strong> {projeto.data}</p>
              <p><strong>Categoria:</strong> {projeto.categoria}</p>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;