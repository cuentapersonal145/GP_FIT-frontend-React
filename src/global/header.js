import React from 'react'
import logo_fit from '../img/logo-fit.png'

const header = (props) => {
    return (
        <div className='header-container'>
            <div className="header-titulo-container">
                <div className="header-titulo">{props.titulo}</div>
                <img className="header-logo-titulo" src={logo_fit} alt="Logo FIT"></img>
            </div>
            { props.subtitulo ? <div className='header-subtitulo'>{props.subtitulo}</div> : null }
        </div>
    )
}

export default header