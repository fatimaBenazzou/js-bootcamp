import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

function ShopLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default ShopLayout;
