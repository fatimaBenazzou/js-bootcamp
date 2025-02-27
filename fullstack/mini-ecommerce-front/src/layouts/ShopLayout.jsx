import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import CartProvider from "../providers/CartProvider";

function ShopLayout() {
    return (
        <CartProvider>
            <Navbar />
            <Outlet />
        </CartProvider>
    );
}

export default ShopLayout;
