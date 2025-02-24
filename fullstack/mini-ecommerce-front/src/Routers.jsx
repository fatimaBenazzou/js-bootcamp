import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Routers() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/auth" element={<AuthLayout />}>
                <Route index element={<Navigate to="/auth/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}

export default Routers;
