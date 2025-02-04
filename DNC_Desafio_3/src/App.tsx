import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importando o BrowserRouter, Route e Routes
import './App.css'

// Páginas
import Home from './pages/Home/Home/home.tsx';

function App() { // Criando o componente App
  return (
      <Router>
          <Routes> {/* Definindo as rotas */}
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} /> {/* Adicionando a rota /home */}
              <Route path="/projetos" element={<>Cadastro</>} />
              <Route path="/blog" element={<>Login</>} />
              <Route path="/contato" element={<>Leads</>} />
          </Routes>
      </Router>
  );
}

export default App; // Exportando o componente App