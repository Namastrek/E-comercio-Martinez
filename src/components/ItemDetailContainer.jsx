import { ItemDetail } from "./ItemDetail"
import data from "../data.json";
import { useEffect, useState } from "react";

export const ItemDetailContainer = () => {
    const [item, getItem ] = useState([])
    useEffect(()=>{
        const itemsDetail = async () => {
            try {
                //Terminar  
            } catch (error) {
                console.log(error);
            }
        } 
        itemsDetail()
    },[])
    return(
        <>
        <ItemDetail/>
        </>
    )
}

/* const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
const post = await resPost.json()
console.log(post); 
const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
const user = await resUser.json() 
document.write(`La persona que escribió el post ${post.id} es ${user.name} y vive en ${user.address.city}`); */