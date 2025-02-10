import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

// Páginas
import Home from './pages/Home/Home/home.tsx';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/projetos" element={<>Cadastro</>} />
              <Route path="/blog" element={<>Login</>} />
              <Route path="/contato" element={<>Leads</>} />
          </Routes>
      </Router>
  );
}

export default App;