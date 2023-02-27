import { Item } from "./Item"
import { useState, useEffect } from "react"
import {collection, getDocs,} from "firebase/firestore"
import {db} from "./firebase.js"

/* import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal) */
export const ItemList = () => {
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
            <Item key={i.id} jueguito={i}/>
        ))}
        </div>    
    )   
}