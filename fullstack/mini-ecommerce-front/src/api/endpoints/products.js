import { apiConfig } from "../apiConfigs";

export async function getProducts({ search, sorting }) {
    const searchParams = new URLSearchParams({
        sortingDirection: sorting.dir,
        sorting: sorting.path,
    });
    if (search) searchParams.append("search", search);
    return apiConfig.get("/products?" + searchParams.toString(), {
        headers: {
            "Content-Type": "application/json",
        },
    });
}
export async function getProductById(id) {
    return apiConfig.get(`/products/${id}`, {});
}
