import { apiConfig } from "../apiConfigs";

export async function getProducts() {
    return apiConfig.get("/products", {});
}
export async function getProductById(id) {
    return apiConfig.get(`/products/${id}`, {});
}
