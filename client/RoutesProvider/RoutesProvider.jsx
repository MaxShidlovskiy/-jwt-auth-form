import { Route, Routes } from "react-router-dom";
import Login from "../src/page/Login/Login";
import Register from "../src/page/Register/Register";
import Home from "../src/page/Home/Home";

export default function RoutesProvider(isAuth) {
    if (isAuth) {
        return (
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        )
    } else {
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/reg" element={<Register />} />
        </Routes>

    }
}