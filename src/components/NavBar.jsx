import 'bootstrap-icons/font/bootstrap-icons.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
       <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">JueguitosYa</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">cosa0</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >cosa1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">cosa2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">cosa3</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar