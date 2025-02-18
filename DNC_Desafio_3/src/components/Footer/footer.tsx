import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className='footer_links'>
                <div><img src="DNC_Desafio_3\src\assets\facebook.svg" alt="facebook" /></div>
                <div><img src="DNC_Desafio_3\src\assets\instagram.svg" alt="instagram" /></div>
                <div><img src="DNC_Desafio_3\src\assets\X.svg" alt="X" /></div>
                <div><img src="DNC_Desafio_3\src\assets\linkedin.svg" alt="linkedin" /></div>
            </div>
            <div className='footer_copyright'>
                <p>Copyright ©2030 All rights reserved </p>
            </div>
        </div>
    );
};

export default Footer;