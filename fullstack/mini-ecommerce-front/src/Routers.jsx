import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShopLayout from "./layouts/ShopLayout";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import useUser from "./hooks/useUser";

function Routers() {
    const { user } = useUser();
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/auth" element={user ? <Navigate to="/shop" /> : <AuthLayout />}>
                <Route index element={<Navigate to="/auth/login" />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>
            <Route path="/shop" element={user ? <ShopLayout /> : <Navigate to="/auth" />}>
                <Route path="products" element={<Products />} />
                <Route path="products/:productId" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
            </Route>
            <Route path="profile" element={user ? <Profile /> : <Navigate to="/auth" />} />
            <Route path="*" element={<Navigate to={user ? "/shop" : "/auth"} />} />
        </Routes>
    );
}

export default Routers;
