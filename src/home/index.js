import { React, useEffect, useState } from 'react'
import swal from 'sweetalert2'
import service from '../services'
import Header from '../global/header'
import Footer from '../global/footer'
import List from '../global/list'

const objService = new service();

const HomeView = () => {

    const [elements, setElements] = useState([]);
    
    useEffect(() => {
        objService.get_servicios_service().then((result) => {
            setElements(result.data);
        }).catch(() => {
            swal.fire({
                title: 'Ups ¡Error!',
                html: '<div style="text-align: justify;">Ocurrio al tratar de obtener los proyectos. Puede deberse a una inactividad del servidor proveedor. Deberias intentar mas tarde o consultarlo con el administrador</div>',
                icon: 'error'
            });
        });
    }, []);

    return (
        <div>
            <Header titulo={"Clientes - Solicitudes - Data Factory"} />
            { elements.length > 0 ? <List context={"/servicio"} list={elements}/> : null }
            <Footer />
        </div>
    )
}

export default HomeView
