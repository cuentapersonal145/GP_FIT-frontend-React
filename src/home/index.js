import { React, useEffect, useState } from 'react'
import List from '../globalComponents/List'
import service from '../services'
import logo_fit from '../img/logo-fit.png'

import swal from 'sweetalert2'

const objService = new service();

const HomeView = () => {

    const [proyectos, setProyectos] = useState([]);
    
    useEffect(() => {
        objService.get_proyectos_service().then((result) => {
            setProyectos(result.data);
        }).catch(() => {
            swal.fire(
                'Ups ¡Error!',
                'Fue al tratar de obtener los proyectos. Puede deberse a una inactividad del servidor proveedor. Deberias intentar mas tarde o consultarlo con el administrador',
                'error'
            );
        });
    }, []);

    return (
        <div>
            <div className="container">
                <div className="titulo">Proyectos Data Factory</div>
                <img className="logo-titulo" src={logo_fit} alt="Logo FIT"></img>
            </div>
            <div className="container-list">
                { proyectos.length > 0 ? <List context={"/proyectos"} list={proyectos}/> : null } 
            </div>
        </div>
    )
}

export default HomeView
