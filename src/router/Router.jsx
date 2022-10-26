import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Asiento from "../components/asientos/Asiento";
import Home from "../components/home/Home";
import SelectVuelos from "../components/selectvuelos/SelectVuelos";
import Vueloidaregresp from "../components/selectvuelos/Vueloidaregresp";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                    <Route element={<Home />}>
                        <Route path="vuelo"  element={<SelectVuelos/> } />
                        <Route path="vueloidavuelta"  element={<Vueloidaregresp/> } />
                    </Route>
                    
                <Route path="vuelos" element={<SelectVuelos/>} />
                <Route path="vuelosidaconvuelta"  element={<Vueloidaregresp/> } />
                <Route path="/vuelos/asiento"  element={<Asiento/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;