import 'bootstrap-icons/font/bootstrap-icons.css'
import ItemListContainer from './ItemListContainer'

const CartWidget = () => {
    return(
        <>
        <i className='nav-link bi bi-cart3 text-white-50'>0</i>
        <ItemListContainer/>
        </>
    )
}

export default CartWidget