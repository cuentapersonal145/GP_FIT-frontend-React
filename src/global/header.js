import React from 'react'
import logo_fit from '../img/logo-fit.png'

const header = () => {
    return (
        <div className="header-container">
            <div className="header-titulo">Proyectos Data Factory</div>
            <img className="header-logo-titulo" src={logo_fit} alt="Logo FIT"></img>
        </div>
    )
}

export default header