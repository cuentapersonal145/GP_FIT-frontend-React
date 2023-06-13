import React from 'react'
// import { Link } from 'react-router-dom';
import './main.css'

const list2 = (props) => {

    const list = props.data.actividades;
    let tamaño = list.length;
    let pos_final = list[tamaño-1].num_actividad;

    return (
        <div className="container">
            <div className="titulo">{props.data.nombre_proyecto}</div>
            <div className="sub-titulo"> [ {props.data.nombre_solicitud} : {props.data.nombre_tipo} ]</div>
            <div className="container-list2">
            { list.map(
                element => (
                    <div className="description-container" key={element.id}>
                        <div className='main-element'> {element.num_actividad} : {element.categoria} </div>
                        <div className='description-element'> &nbsp;{element.nombre} </div>
                        { element.descripcion !== "NO APLICA" ? <div className='description-element'> &nbsp;[ {element.descripcion} ] </div> : null}
                        { element.num_actividad === pos_final ? <div> &nbsp; </div> : null}
                    </div>
                )
            )}
            </div>
        </div>
    )
}

export default list2
