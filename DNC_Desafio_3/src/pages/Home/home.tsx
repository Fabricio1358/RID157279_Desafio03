import React from "react";
import "./home.css";
import BlogHome from "../../components/Blog/blog_Home.tsx";
import { useTheme } from "../../Utils/theme-context";

const Home: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={`home ${theme}`}>
      <div className="home-margin">
        <div className="home-container">
          <h1>
            Olá, eu sou o Fabrício<br></br>Desenvolvedor Full-stack
          </h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="red-button">Download Resumo</button>
        </div>
      </div>
      <div className="no-margin">
        <BlogHome />
      </div>
      <div className="home-projetos">
        <div className="projetos-titulo">
          <h1>Projetos</h1>
        </div>
        <div className="projetos-con">
          <div className="con-section">
            <div className="div-img">
              <img className="img" src="../../../assets/home-projetos1.png" alt="Projeto 1" />
            </div>
            <div className="div-sobre">
              <h2>Designing Dashboards</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="con-section">
            <div className="div-img">
              <img src="../../../assets/home-projetos2.png" alt="Projeto 2" />
            </div>
            <div className="div-sobre">
              <h2>Vibrant Portraits of 2020</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
          <div className="con-section">
            <div className="div-img">
              <img src="../../../assets/home-projetos3.png" alt="Projeto 3" />
            </div>
            <div className="div-sobre">
              <h2>36 Days of Malayalam type</h2>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;