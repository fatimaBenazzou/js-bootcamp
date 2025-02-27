import { apiConfig } from "../apiConfigs";

export async function getProducts() {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("You aren't logged in");
    return apiConfig.get("/products", {});
}
export async function getProductById(id) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("You aren't logged in");
    return apiConfig.get(`/products/${id}`, {
        headers: { Authorization: "Bearer " + token },
    });
}
