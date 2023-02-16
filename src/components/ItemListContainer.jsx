import "./CSS/itemListContainer.css"
import { ItemList } from "./ItemList"

export const ItemListContainer = ({greeting}) => {
    return(
        <>
        <h1>{greeting}</h1>
        <ItemList/>
        </>
    )
}