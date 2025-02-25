import { apiConfig } from "../apiConfigs";

export async function login({ email, password }) {
    return apiConfig.post("/auth/login", {
        email,
        password,
    });
}
export async function register({ email, password, firstName, lastName }) {
    return apiConfig.post("/auth/register", {
        email,
        password,
        firstName,
        lastName,
    });
}
