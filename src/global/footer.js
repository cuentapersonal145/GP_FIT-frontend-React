import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-content">
            <div className="footer-section">
                <div className='titulo-footer'>Acerca de Nosotros</div>
                En Factor IT ayudamos a nuestros clientes a adaptarse al mundo digital y los ayudamos a volverse exitosos.
            </div>
            <div className="footer-section">
                <div className='titulo-footer'>Enlaces Rápidos</div>
                <Link to="/">Proyectos</Link>
            </div>
            <div className="footer-section">
                <div className='titulo-footer'>Contacto</div>
                Correo electrónico: contact@factorit.com
            </div>
        </div>
        <div>Todos los derechos reservados &copy; 2023</div>
    </div>
  )
}

export default footer