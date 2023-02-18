import datas from "../data.json"
import { Item } from "./Item"

export const ItemList = () => {
    return(
        <div className="card card-error p-2"> {datas.map((data) => (
            <Item key={data.id} jueguito={data}/>
        ))}
        </div>    
    )   
}