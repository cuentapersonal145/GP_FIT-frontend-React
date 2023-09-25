import { React, useEffect, useState } from 'react'
import swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import service from '../services'
import Header from '../global/header'
import Footer from '../global/footer'
import List from '../global/list'

const objService = new service();

function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const Proyectos = () => {

    const [elements, setElements] = useState([]);
    let { id, nombre } = useParams();
    
    useEffect(() => {
        objService.get_proyectos_service(id).then((result) => {
            setElements(result.data);
        }).catch(() => {
            swal.fire({
                title: 'Ups ¡Error!',
                html: '<div style="text-align: justify;">Ocurrio al tratar de obtener los requerimientos del proyecto (' + id + '). Puede deberse a una inactividad del servidor proveedor. Deberias intentar mas tarde o consultarlo con el administrador.</div>',
                icon: 'error',
            });
        });
    }, [id]);

    return (
        <div>
            <Header titulo={"Proyectos / Servicios"} subtitulo={nombre}/>
            { elements.length > 0 ? <List context={"/servicio/" + id + "/" + nombre + "/proyecto_servicio"} list={elements}/> : null }
            <Footer />
        </div>
    )
}

export default Proyectos
