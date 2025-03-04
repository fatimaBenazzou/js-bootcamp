import { useContext } from "react";
import ShopContext from "../contexts/shop";

export default function useShop() {
    const context = useContext(ShopContext);
    if (context) {
        return context;
    } else throw new Error("Context for shop is not available");
}
