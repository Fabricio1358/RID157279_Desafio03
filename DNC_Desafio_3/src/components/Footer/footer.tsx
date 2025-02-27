import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { useTheme } from "../../Utils/theme-context";

const Footer: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`footer ${theme}`}>
      <div className="footer_links">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="..\assets\facebook.svg" alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../assets/instagram.svg" alt="instagram" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../assets/X.svg" alt="X" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="../../../assets/linkedin.svg" alt="linkedin" />
        </a>
      </div>
      <div className="footer_nav_links">
        <Link to="/">Home</Link>
        <Link to="/projetos">Projetos</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contato">Contato</Link>
      </div>
      <div className="footer_copyright">
        <p>Copyright ©2030 All rights reserved </p>
      </div>
      <button onClick={toggleTheme} className="footer-button">
        Alterar para tema {theme === 'light' ? 'escuro' : 'claro'}
      </button>
    </div>
  );
};

export default Footer;