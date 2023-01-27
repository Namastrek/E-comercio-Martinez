import CartWidget from './CartWidget'

const NavBar = () => {
    return(
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JueguitosYa</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">cosa0</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">cosa1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">cosa2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">cosa3</a>
                        </li>
                    </ul>
                    <div>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar