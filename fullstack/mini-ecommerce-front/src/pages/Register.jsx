import { useState } from "react";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const { register, loading } = useAuth();
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
        register(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} />
            <input name="password" placeholder="Password" type="password" onChange={handleChange} />
            <button disabled={loading} type="submit">
                {loading ? "Loading..." : "Register"}
            </button>
        </form>
    );
};

export default Register;
