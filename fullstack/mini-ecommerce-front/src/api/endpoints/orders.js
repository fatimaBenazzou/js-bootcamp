import { apiConfig } from "../apiConfigs";

export async function createOrder(props) {
    return apiConfig.post("/orders", { ...props });
}
export async function getMyOrders() {
    return apiConfig.get("/orders");
}
