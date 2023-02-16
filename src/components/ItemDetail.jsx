import "./CSS/itemDetailContainer.css"
import { ItemCount } from "./ItemCount"
import { Link } from "react-router-dom";

export const ItemDetail = () => {
    return(
        <div className="card card-error p-2">
        <img src="#" className="card-img-top" alt="Jueguito prueba imagen"/>
        <div className="card-body">
            <h5 className="card-title" >título del producto</h5>
            <p className="card-text">descripcion</p>
            <p className="card-text">Stock: </p>
            <p className="card-text">Precio: </p>
            <div className="container">
                <ItemCount/>
                <a className="btn btn-primary" href="#">Agregar al carrito</a>
            </div>
        </div>
        </div>
    )
}