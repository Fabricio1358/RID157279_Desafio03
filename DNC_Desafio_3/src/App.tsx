import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

// Páginas
import Home from './components/Home';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/projetos" element={<>Cadastro</>} />
              <Route path="/blog" element={<>Login</>} />
              <Route path="/contato" element={<>Leads</>} />
          </Routes>
      </Router>
  );
}

export default App