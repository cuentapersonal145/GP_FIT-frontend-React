import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'

const list = (props) => {

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <Link 
                        to={props.context + "/" + element.id + "/" + element.nombre} 
                        key={element.id}
                        className="card-container" 
                    >
                        <div className="description-card-container">
                            <div>
                                <div className='description-card'> {element.nombre} </div>
                                { element.nombre_tipo ? <div className='description2-card'> [ {element.nombre_solicitud} : {element.nombre_tipo} ] </div> : null}
                            </div>
                        </div>
                    </Link>
                )
            )}
        </div>
    )
}

export default list
