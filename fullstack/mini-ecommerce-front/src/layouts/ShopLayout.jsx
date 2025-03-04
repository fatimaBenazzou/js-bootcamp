import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import CartProvider from "../providers/CartProvider";
import ShopProvider from "../providers/ShopProvider";

function ShopLayout() {
    return (
        <CartProvider>
            <ShopProvider>
                <Navbar />
                <Outlet />
            </ShopProvider>
        </CartProvider>
    );
}

export default ShopLayout;
