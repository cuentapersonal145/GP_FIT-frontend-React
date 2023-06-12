import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'

const list = (props) => {

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <Link 
                        to={props.context + "/" + element.id} 
                        key={element.id}
                        className="card-list" 
                    >
                        <div className="name-element-container">
                            <p> {element.nombre} </p>
                        </div>
                    </Link>
                )
            )}
        </div>
    )
}

export default list
