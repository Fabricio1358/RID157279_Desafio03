import React from "react";
import "./blog.css";
import { useTheme } from "../../Utils/theme-context";

const Blog: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  const posts = [
    {
      titulo: "Making a design system from scratch",
      data: "12 Feb 2030",
      categoria: "Design, Pattern",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagem: "../../../assets/home-projetos1.png",
    },
    {
      titulo: "Creating pixel perfect icons in Figma",
      data: "12 Feb 2030",
      categoria: "Figma, Icon Design",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      imagem: "../../../assets/home-projetos2.png",
    },
    {
      titulo: "36 Days of Malayalam type",
      data: "12 Feb 2030",
      categoria: "Typography",
      descricao:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
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