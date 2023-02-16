import data from "../data.json"
import { Item } from "./Item"
import { useState, useEffect } from "react"

export const ItemList = () => {
    const [products, getProducts] = useState([])
    useEffect(()=> {
        // console.log("algo");
    },[])
    return(
        <div className="card card-error p-2"> {data.map((e) => (
            <>
            <Item key={e.id} jueguito={e}/>
            </>
        ))}
        </div>    
    )   
}