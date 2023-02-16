import "./CSS/itemCount.css";
import { useEffect, useState } from "react"
/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal) */

export const ItemCount = ({countId}) => {
    const[count, setCount] = useState(1)
    useEffect(()=> {
        /* console.log("Terminar, preguntar como se haría para que el contador se pare dependiendo del stock que tenga"); */
    },[/* count */])
    return(
        <div className="item-count">
            <button type="button" className="btn btn-secondary" onClick={() => setCount(count - 1)}>-</button>
            <p>{count}</p>
            <button type="button" className="btn btn-secondary" onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}