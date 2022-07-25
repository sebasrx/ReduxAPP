import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer className='footer'>
        <div className='footer__made'>
            Made with
            {' '}
            <span role="img" aria-label='heart'>❤️</span>
            {' '}
            by
            <a 
                href='https://twitter.com/ricky_martin'
                rel='noopener noreferrer'
                target="_blank"
                className='logo'
            >
                <span className='logo-img'>&lt;&gt;</span>
                {' '}
                <span>Ricky Martin</span>
            </a>
        </div>
        <div className='footer__location'>
            <span>Concepción</span>
            , 2022
        </div>
    </footer>
);

export default Footer;