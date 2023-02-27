import "./CSS/itemCount.css";
import { useState } from "react"

export const ItemCount = ({countId}) => {
    const[count, setCount] = useState(1)
    const bajar = () => {
        setCount(count - 1)
    }
    const subir = () => {
        setCount(count + 1)
    }
    
    return(
        <div className="item-count">
            <button type="button" className="btn btn-primary" disabled={count <= countId} onClick={() => bajar()}>-</button>
            <p>{count}</p>
            <button type="button" className="btn btn-primary" disabled={count >= countId} onClick={() => subir()}>+</button>
        </div>
    )
}