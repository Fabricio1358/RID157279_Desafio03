import React, { ReactNode } from 'react';
import './index.css';

const Home: React.FC = (): JSX.Element => {
    return (
        <div style={{ backgroundColor: 'white', padding: '20px' }}>
            <h1>Título</h1>
            <p>Este é um texto de exemplo.</p>
            <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                Botão Vermelho
            </button>
        </div>
    );
};

export default Home;