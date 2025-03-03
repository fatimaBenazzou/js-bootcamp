// import { useContext, useState } from "react";
// import UserContext from "../contexts/user";
// import { login as loginApi, register as registerApi } from "../api/endpoints/auth";

// export default function useAuth() {
//     const { user, setUser } = useContext(UserContext);
//     const [loading, setLoading] = useState(false);

//     async function login(credentials) {
//         setLoading(true);
//         try {
//             const response = await loginApi(credentials);
//             console.log(response);

//             const { token, user } = response.data;
//             localStorage.setItem("token", token);
//             setUser(user);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     async function register(credentials) {
//         setLoading(true);
//         try {
//             const response = await registerApi(credentials);
//             const { token, user } = response.data;

//             localStorage.setItem("token", token);
//             setUser(user);
//         } catch (error) {
//             console.log(error);
//         } finally {
//             setLoading(false);
//         }
//     }

//     function logout() {
//         localStorage.removeItem("token");
//         setUser(null);
//     }
//     return { user, login, register, logout, loading };
// }
