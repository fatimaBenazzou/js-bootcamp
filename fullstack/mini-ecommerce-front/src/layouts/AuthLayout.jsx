import { Outlet, useMatch, useNavigate } from "react-router";

function AuthLayout() {
    const isLogin = useMatch("/auth/login");
    const navigate = useNavigate();
    return (
        <div>
            <h1>{isLogin ? "Login" : "Register"}</h1>
            <Outlet />
            <p>
                {isLogin ? "Don't have an account ?" : "Already have an account"}
                <button
                    onClick={() => {
                        isLogin ? navigate("/auth/register") : navigate("/auth/login");
                    }}
                >
                    {isLogin ? "Register here" : "Login here"}
                </button>
            </p>
        </div>
    );
}

export default AuthLayout;
