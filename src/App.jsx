import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import {ItemDetailContainer} from './components/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <NavBar/>
                        <ItemListContainer greeting="Lista de productos"/>
                    </>
                }/>
                <Route path='/category/:id' element={
                    <>
                        <NavBar/>
                        <ItemListContainer/>
                    </>
                }
                />
                <Route path='/item/:id' element={
                    <>
                        <NavBar/>
                        <ItemDetailContainer/>
                    </>
                }/>
                <Route path='/carrito' element={
                    <>
                        <NavBar/>
                    </>
                }/>
            </Routes>
        </BrowserRouter>
        </>
    )
}