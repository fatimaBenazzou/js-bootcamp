import { useEffect, useReducer } from "react";
import CartContext from "../contexts/cart";

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART": {
            const { product, quantity = 1 } = action.payload;
            const existingProductIndex = state.findIndex(
                (item) => item.product._id === product._id
            );

            let newCart;
            if (existingProductIndex === -1) {
                newCart = [...state, { product, quantity }];
            } else {
                newCart = [...state];
                newCart[existingProductIndex].quantity += quantity;
            }
            return newCart;
        }

        case "REMOVE_FROM_CART": {
            const { productId, quantity = 1 } = action.payload;
            const newCart = state
                .map((item) => {
                    if (item.product._id === productId) {
                        return { ...item, quantity: item.quantity - quantity };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0);

            return newCart;
        }

        case "CLEAR_CART":
            return [];

        default:
            return state;
    }
}
const loadCartFromLocalStorage = () => {
    try {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error(error);
        return [];
    }
};
// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, [], loadCartFromLocalStorage);

    useEffect(() => {
        if (cart.length) {
            localStorage.setItem("cart", JSON.stringify(cart));
        } else {
            localStorage.removeItem("cart");
        }
    }, [cart]);

    function addToCart(product, quantity = 1) {
        dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    }
    function removeFromCart(productId, quantity = 1) {
        dispatch({ type: "REMOVE_FROM_CART", payload: { productId, quantity } });
    }
    function clearCart() {
        dispatch({ type: "CLEAR_CART" });
    }

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce(
        (acc, item) => acc + item.quantity * item.product.price.current,
        0
    );
    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, cartCount, totalPrice }}
        >
            {children}
        </CartContext.Provider>
    );
}
