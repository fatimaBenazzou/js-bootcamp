import productModel from "../models/product.js";
import { provincesPricesMap } from "../config/provinces-prices.js";
import orderModel from "../models/order.js";

export async function createOrder(req, res) {
    const user = req.user;
    try {
        const { cart, delivery } = req.body;
        if (!cart || !delivery) throw new Error("Invalid cart or delivery");

        const productsIds = cart.map((cartElement) => cartElement.productId);
        const products = await productModel.find({ _id: { $in: productsIds } });

        if (products.length !== cart.length) throw new Error("We couldn't find all the products");

        const subtotals = cart.map((elem) => {
            const { productId, quantity } = elem;
            const product = products.find((p) => p._id.equals(productId));
            const itemPrice = product.price.current * quantity;
            return itemPrice;
        });

        const subtotal = subtotals.reduce((acc, itemPrice) => {
            return acc + itemPrice;
        }, 0);

        const provinceDetails = provincesPricesMap.get(delivery.province);

        if (!provinceDetails) throw new Error(`Province ${delivery.province} does not exist`);

        const deliveryPrice = provinceDetails.price;
        console.log(deliveryPrice, subtotal);

        const total = deliveryPrice + subtotal;
        const order = await orderModel.create({
            cart,
            delivery,
            total,
            userId: user._id,
        });

        res.json({ data: order, message: "Order created successfully" });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}

export async function getMyOrders(req, res) {
    const user = req.user;
    try {
        const orders = await orderModel.find({ userId: user._id }).populate("cart.productId");
        res.json({
            data: orders,
            message: "Your order has been found successfully",
        });
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
}
