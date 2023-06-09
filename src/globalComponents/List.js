import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'

const List = (props) => {

    return (
        <div className="container-list">
            { props.list.map(
                element => (
                    <Link 
                        to={props.context + "/" + element.id} 
                        key={element.id}
                        className="card-list" 
                    >
                    {/* <Link to={props.context + "/" + element.id} key={element.id} 
                        className="card-list" style={{ backgroundColor: element.color }}
                    >
                        <img src={element.imagen} className="img" alt="img" /> */}
                        <div className="name-element-container">
                            <p> {element.nombre} </p>
                        </div>
                    </Link>
                )
            )}
        </div>
    )
}

export default List
