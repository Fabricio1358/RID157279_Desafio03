import React from "react";
import "./projetos.css";
import { useTheme } from "../../Utils/theme-context";

const Projetos: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const projetos = [
    {
      titulo: "Designing Dashboards",
      data: "12 Feb 2030",
      categoria: "Design, Pattern",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagem: "../../../assets/home-projetos1.png",
    },
    {
      titulo: "Vibrant Portraits of 2020",
      data: "12 Feb 2030",
      categoria: "Photography",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagem: "../../../assets/home-projetos2.png",
    },
    {
      titulo: "36 Days of Malayalam type",
      data: "12 Feb 2030",
      categoria: "Typography",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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
              <p>{projeto.data}</p>
              <p>{projeto.categoria}</p>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
        {projetos.map((projeto, index) => (
          <div key={index} className={`projeto-item ${theme}`}>
            <div className={`projeto-img ${theme}`}>
              <img src={projeto.imagem} alt={projeto.titulo} />
            </div>
            <div className={`projeto-info ${theme}`}>
              <h2>{projeto.titulo}</h2>
              <p>{projeto.data}</p>
              <p>{projeto.categoria}</p>
              <p>{projeto.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projetos;
