import React, { useState } from "react";
import "./contato.css";
import { useTheme } from "../../Utils/theme-context";

const Contato: React.FC = (): JSX.Element => {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Netfly e tals
    setIsSubmitted(true);
  };

  return (
    <div className={`contato-container ${theme}`}>
      <h1>Contato</h1>
      {isSubmitted ? (
        <p className="success-message">Formulário enviado com sucesso!</p>
      ) : (
        <form className={`contato-form ${theme}`} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" rows={3} required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default Contato;