import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className='nav__list'> 
                    <li><a href="/home">Home</a></li>
                    <li><a href="/projects">Projetos</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;