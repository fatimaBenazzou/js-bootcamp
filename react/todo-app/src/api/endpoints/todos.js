import { apiConfig } from "../config";

export async function getTodos() {
    try {
        const response = await apiConfig.get("/todos");
        return response.data;
    } catch (error) {
        throw new Error("Failed to fetch Todos", error.message);
    }
}
export async function createTodo(todo) {
    try {
        const response = await apiConfig.post("/todos", todo);
        return response.data;
    } catch (error) {
        throw new Error("Failed to create Todo", error.message);
    }
}
