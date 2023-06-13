import { React, useEffect, useState } from 'react'
import swal from 'sweetalert2'
import { useParams } from 'react-router-dom';
import service from '../services'
import Header from '../global/header'
import Footer from '../global/footer'
import List2 from '../global/list2'

const objService = new service();

const Actividades = () => {

    const [elements, setElements] = useState([]);
    let { id, nombre } = useParams();
    
    useEffect(() => {
        objService.get_actividades_service(id).then((result) => {
            setElements(result.data);
        }).catch(() => {
            swal.fire({
                title: 'Ups ¡Error!',
                html: '<div style="text-align: justify;">Ocurrio al tratar de obtener las actividades del proyecto por servicio (' + id + '). Puede deberse a una inactividad del servidor proveedor. Deberias intentar mas tarde o consultarlo con el administrador.</div>',
                icon: 'error',
            });
        });
    }, [id]);

    return (
        <div>
            <Header titulo={"Actividades"} subtitulo={nombre}/>
            { elements.length > 0 ? <List2 data={elements[0]}/> : null }
            <Footer />
        </div>
    )
}

export default Actividades
