import useAuth from "../hooks/useAuth";
import ToggleButton from "./ToggleButton";
import { NavLink } from "react-router";

const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <header>
            <NavLink to={"/shop/products"}>Shop</NavLink>
            <nav>
                {user ? (
                    <>
                        <NavLink to={"/shop/cart"}>Cart</NavLink>
                        <NavLink>Profile</NavLink>
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <NavLink to="/auth/login">Login</NavLink>
                )}
                <ToggleButton />
            </nav>
        </header>
    );
};

export default Navbar;
