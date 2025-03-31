import React, { useEffect, useState } from "react";
import "./home.css";
import BlogHome from "../../components/Blog/blog_Home.tsx";
import { useTheme } from "../../Utils/theme-context";

const Home: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const [projetos] = useState([
    {
      titulo: "Designing Dashboards",
      descricao:
        "Um projeto focado em criar dashboards interativos e intuitivos para análise de dados em tempo real, utilizando tecnologias modernas como React e D3.js.",
      imagem:
        "Desafio 3 Desafio Desenvolva um portfólio com React hooks/DNC_Desafio_3/src/assets/home-projetos1.png",
    },
    {
      titulo: "Vibrant Portraits of 2020",
      descricao:
        "Uma coleção de retratos vibrantes que exploram a diversidade cultural e emocional, capturando momentos únicos com técnicas avançadas de fotografia.",
      imagem: "../../../assets/home-projetos2.png",
    },
    {
      titulo: "36 Days of Malayalam type",
      descricao:
        "Um projeto tipográfico que celebra a beleza da escrita Malayalam, explorando formas criativas e inovadoras para representar cada caractere.",
      imagem: "../../../assets/home-projetos3.png",
    },
  ]);

  // useEffect para rolagem
  useEffect(() => {
    const handleScroll = () => {
      console.log("Usuário rolou a página!");
    };

    window.addEventListener("scroll", handleScroll);

    //desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`home ${theme}`}>
      <div className="home-margin">
        <div className={`home-container ${theme}`}>
          <h1>
            Olá, eu sou o Fabrício<br></br>Desenvolvedor Full-stack
          </h1>
          <p>
            Sou um desenvolvedor apaixonado por criar soluções inovadoras e
            eficientes. Tenho experiência em desenvolvimento web, design de
            interfaces e integração de sistemas, sempre buscando entregar o
            melhor para os usuários.
          </p>
          <button className="red-button">Download Resumo</button>
        </div>
      </div>
      <div className="no-margin">
        <BlogHome />
      </div>
      <div className={`home-projetos ${theme}`}>
        <div className="projetos-titulo">
          <h1>Projetos</h1>
        </div>
        <div className="projetos-con">
          {projetos.map((projeto, index) => (
            <div key={index} className={`con-section ${theme}`}>
              <div className="div-img">
                <img
                  className="img"
                  src={projeto.imagem}
                  alt={projeto.titulo}
                />
              </div>
              <div className="div-sobre">
                <h2>{projeto.titulo}</h2>
                <p>{projeto.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;