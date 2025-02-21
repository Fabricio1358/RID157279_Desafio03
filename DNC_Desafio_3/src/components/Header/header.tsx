import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useTheme } from '../../Utils/theme-context';

const Header: React.FC = () => {
    const { theme } = useTheme();
    return (
        <header className={`header ${theme}`}>
            <nav className="nav">
                <ul className='nav__list'> 
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/projetos">Projetos</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contato">Contato</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;