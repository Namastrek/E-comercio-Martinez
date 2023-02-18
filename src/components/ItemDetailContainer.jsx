import "./CSS/itemDetailContainer.css"
import { ItemDetail } from "./ItemDetail"
import datas from "../data.json";

export const ItemDetailContainer = () => {
    return(
        <div className="card card-error p-2"> {datas.map((data) => (
            <>
            <ItemDetail key={data.id} jueguito={data}/>   
            </>
            ))}
        </div>
    )
}

