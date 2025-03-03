import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { createOrder } from "../api/endpoints/orders";
import useCart from "../hooks/useCart";
import useUser from "../hooks/useUser";
import { provincesPrices } from "../api/provinces-prices";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function Checkout() {
    const { cart, total: subtotal, clearCart } = useCart();
    const { user } = useUser();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { isPending, mutate: CreateOrderAction } = useMutation({
        mutationFn: createOrder,
        mutationKey: ["create-order"],
        onSuccess() {
            queryClient.invalidateQueries(["orders"]);
            clearCart();
            toast.success("Commande confirmée 🎉");
            navigate("/shop");
        },
        onError(error) {
            console.error("Erreur lors de la commande :", error);
            toast.error("Une erreur s'est produite lors de la commande. Veuillez réessayer.");
        },
    });

    const [orderDetails, setOrderDetails] = useState({
        province: "",
        city: "",
        address: "",
        phone: "",
    });

    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const totalPrice = subtotal + deliveryPrice;

    useEffect(() => {
        const selectedProvince = provincesPrices.find(
            (province) => province.id === orderDetails.province
        );
        if (selectedProvince?.price) setDeliveryPrice(selectedProvince.price);
    }, [orderDetails]);

    const handleProvinceChange = (e) => {
        const selectedProvinceId = parseInt(e.target.value);
        setOrderDetails({ ...orderDetails, province: selectedProvinceId });
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (!orderDetails.province || !orderDetails.city || !orderDetails.phone) {
            toast.error("Veuillez remplir tous les champs obligatoires !");
            return;
        }

        const orderData = {
            userId: user._id,
            cart: cart.map((item) => ({
                productId: item.product._id,
                quantity: item.quantity,
            })),
            delivery: orderDetails,
            total: totalPrice,
        };

        CreateOrderAction(orderData);
    }

    return (
        <div>
            <h2>Checkout</h2>

            <div>
                <p>
                    <strong>Sub-total :</strong> {subtotal} DA
                </p>
                <p>
                    <strong>Delivery :</strong> {deliveryPrice} DA
                </p>
                <p>
                    <strong>Total :</strong> {totalPrice} DA
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <label>
                    Province:{" "}
                    <select value={orderDetails.province} onChange={handleProvinceChange} required>
                        <option value="">select a province</option>
                        {provincesPrices.map((province) => (
                            <option key={province.id} value={province.id}>
                                {province.name.en} ({province.price} DA)
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <label>
                    City:{" "}
                    <input
                        type="text"
                        value={orderDetails.city}
                        onChange={(e) => setOrderDetails({ ...orderDetails, city: e.target.value })}
                        required
                    />
                </label>
                <br />
                <label>
                    Address:{" "}
                    <input
                        type="text"
                        value={orderDetails.address}
                        onChange={(e) =>
                            setOrderDetails({ ...orderDetails, address: e.target.value })
                        }
                    />
                </label>
                <br />
                <label>
                    Phone number:{" "}
                    <input
                        type="text"
                        value={orderDetails.phone}
                        onChange={(e) =>
                            setOrderDetails({ ...orderDetails, phone: e.target.value })
                        }
                        required
                    />
                </label>
                <br />
                <button type="submit" disabled={isPending}>
                    Confirm Order
                </button>
            </form>
        </div>
    );
}

export default Checkout;
