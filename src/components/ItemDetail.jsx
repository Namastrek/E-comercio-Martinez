import { ItemCount } from "./ItemCount"

export const ItemDetail = ({jueguito}) => { 
    return(
        <>
        <img src={jueguito.pictureURL} className="card-img-top" alt={jueguito.title}/>
        <div className="card-body">
            <h5 className="card-title" >{jueguito.title}</h5>
            <p className="card-text">{jueguito.description}</p>
            <p className="card-text">Stock: {jueguito.stock}</p>
            <p className="card-text">Precio: {jueguito.price}</p>
            <div className="container">
                <ItemCount countId={jueguito.stock}/>
                <button className="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}