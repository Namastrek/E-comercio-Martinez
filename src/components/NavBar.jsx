import 'bootstrap-icons/font/bootstrap-icons.css'
import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JueguitosYa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link">cosa0</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" >cosa1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">cosa2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">cosa3</a>
                        </li>
                        <li class="nav-item">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar