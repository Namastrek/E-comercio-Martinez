import { Link } from "react-router-dom";

export const Item = ({jueguito}) => {
    return(
        <>
        <img src={jueguito.pictureURL} className="card-img-top" alt={jueguito.title}/>
        <div className="card-body">
            <h5 className="card-title" >{jueguito.title}</h5>
            <div className="container">
                <Link to="/item/:id" className="btn btn-primary">Detalle del producto</Link>
            </div>
        </div>
        </> 
    )
}