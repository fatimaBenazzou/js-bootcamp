import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../api/endpoints/auth";
import useUser from "../hooks/useUser";
import toast from "react-hot-toast";

function Login() {
    const { setUser } = useUser();
    // const { login, loading } = useAuth();
    const { isPending, mutate: loginAction } = useMutation({
        mutationFn: loginApi,
        mutationKey: ["login"],
        onSuccess: (response) => {
            const { token, user } = response.data;
            localStorage.setItem("token", token);
            setUser(user);
            toast.success(`Welcome ${user.firstName}`);
        },
        onError: (error) => {
            toast.error(error.response?.data?.error || "Login failed");
        },
    });
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        loginAction(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={form.email}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
            />
            <button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Login"}
            </button>
        </form>
    );
}

export default Login;
