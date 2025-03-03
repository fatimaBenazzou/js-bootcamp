import { useState } from "react";
import useUser from "../hooks/useUser";
import { useMutation } from "@tanstack/react-query";
import { register as registerApi } from "../api/endpoints/auth";
import toast from "react-hot-toast";

const Register = () => {
    const { setUser } = useUser();
    // const { login, loading } = useAuth();
    const { isPending, mutate: registerAction } = useMutation({
        mutationFn: registerApi,
        mutationKey: ["register"],
        onSuccess: (response) => {
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            setUser(user);
            toast.success(`Account created! Welcome ${user.firstName}`);
        },
        onError: (error) => {
            toast.error(error.response?.data?.error || "register failed");
        },
    });
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        registerAction(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={form.firstName}
            />
            <input
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={form.lastName}
            />
            <input
                name="email"
                placeholder="Email"
                type="email"
                onChange={handleChange}
                value={form.email}
            />
            <input
                name="password"
                placeholder="Password"
                type="password"
                onChange={handleChange}
                value={form.password}
            />
            <button disabled={isPending} type="submit">
                {isPending ? "Loading..." : "Register"}
            </button>
        </form>
    );
};

export default Register;
