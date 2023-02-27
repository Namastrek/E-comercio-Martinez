import "./CSS/itemDetailContainer.css"
import { ItemDetail } from "./ItemDetail"
import { useState, useEffect } from "react"
import {collection, getDocs,} from "firebase/firestore"
import {db} from "./firebase.js"

export const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])
    const productsCollection = collection(db,"JueguitosYa")
    const getProducts = async () => {
        const data = await getDocs(productsCollection)
        setProducts(data.docs.map((i) => ({...i.data(),id:i.id}))
        )
    } 
    useEffect(() => {
        getProducts()
    },[])
    return(
        <div className="card card-error p-2"> {products.map((i) => (
            <>
            <ItemDetail key={i.id} jueguito={i}/>   
            </>
            ))}
        </div>
    )
}

