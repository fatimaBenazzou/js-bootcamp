import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
    const { login, loading } = useAuth();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
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
            <button disabled={loading} type="submit">
                {loading ? "Loading..." : "Login"}
            </button>
        </form>
    );
}

export default Login;
