import {CartWidget} from './CartWidget'
import { Link } from "react-router-dom";

export const NavBar = () => {
    return(
       <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">JueguitosYa</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Juegos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/:id">Mejor Puntuación</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/category/:id">Nuevos Productos</Link>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-white-50" href='#'><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}