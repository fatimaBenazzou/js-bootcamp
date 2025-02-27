import { useNavigate } from "react-router";
import useCart from "../hooks/useCart";

function Cart() {
    const { cart, removeFromCart, cartCount, total, clearCart } = useCart();
    const navigate = useNavigate();

    return (
        <div>
            <h2>Cart</h2>
            {cartCount === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.product._id}>
                            <span>
                                {item.product.name} - {item.product.price.current}€ (x
                                {item.quantity})
                            </span>
                            <button
                                onClick={() => {
                                    removeFromCart(item.product._id);
                                }}
                            >
                                ❌
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            {cartCount > 0 && (
                <div>
                    <p>
                        <strong>Total : {total}€</strong>
                    </p>
                    <button onClick={() => navigate("/shop/checkout")}>Make order</button>
                    <button
                        onClick={() => {
                            clearCart();
                        }}
                    >
                        Reset Cart
                    </button>
                </div>
            )}
        </div>
    );
}

export default Cart;
