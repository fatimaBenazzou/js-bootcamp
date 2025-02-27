import { useContext } from "react";
import CartContext from "../contexts/cart";

export default function useCart() {
    const { cart, addToCart, removeFromCart, clearCart, cartCount, totalPrice } =
        useContext(CartContext);

    return {
        cart,
        total: totalPrice,
        cartCount,
        addToCart,
        removeFromCart,
        clearCart,
    };
}
