import React from "react";
import "./home.css";
import Header from "../../../components/Header/header.tsx";
import BlogHome from "../../../components/Blog/blog_Home.tsx";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default Home;
