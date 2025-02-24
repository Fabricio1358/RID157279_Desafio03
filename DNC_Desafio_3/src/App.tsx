import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Componentes
import Header from './components/Header/header.tsx';
import Footer from './components/Footer/footer.tsx';
import ScrollToTop from './Utils/ScrollToTop.ts';
import { ThemeProvider } from './Utils/theme-context';

// Páginas
import Home from './pages/Home/home.tsx';
import Projetos from './pages/Projetos/projetos.tsx';
import Blog from './pages/Blog/blog.tsx';
import Contato from './pages/Contato/contato.tsx';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projetos" element={<Projetos />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;