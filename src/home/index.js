import { React, useEffect, useState } from 'react'
import swal from 'sweetalert2'
import service from '../services'
import Header from '../global/header'
import List from '../global/list'
import Footer from '../global/footer'

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
            <Header />
            { proyectos.length > 0 ? <List context={"/proyectos"} list={proyectos}/> : null }
            <Footer />
        </div>
    )
}

export default HomeView
