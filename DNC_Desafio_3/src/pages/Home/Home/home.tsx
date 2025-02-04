import React, { ReactNode } from 'react'; // Importando o React
import './home.css'; // Importando o CSS
import Header from '../../../components/Header/header.tsx'; // Importando o componente Header

const Home: React.FC = (): JSX.Element => { // Criando o componente Home
    return (
        <>
            <Header/> {/* Renderizando o componente Header */}
            <div style={{ backgroundColor: 'white', padding: '20px' }}>
                <h1>Título</h1>
                <p>Este é um texto de exemplo.</p>
                <button style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                    Botão Vermelho
                </button>
            </div>
        </>
    );
};

export default Home; // Exportando o componente Home