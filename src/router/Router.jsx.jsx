import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../components/home/Home";
import SelectVuelos from "../components/selectvuelos/SelectVuelos";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                    <Route element={<Home />}>
                        <Route path="vuelo"  element={<SelectVuelos/> } />
                    </Route>
                <Route path="vuelos" element={<SelectVuelos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;