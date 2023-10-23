import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./Paginas/Cadastro";
import Home from "./Paginas/Home";
import Login from "./Paginas/Login"

function AppRoutes() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/cadastro" element={<Cadastro />}></Route>
                <Route path="/home" element={<Home />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;