import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./loginAndSignup.module.css";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export function LoginAndSignup() {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname === "/login";
    const isSignupPage = location.pathname === "/signup";

    return (
        <div className="bg-1 p-4">
            <div className="d-flex justify-content-between bg-white rounded p-4">
                <Login />

                <div className={style.vr}></div>

                <SignUp />

                <button className="btn h-25" onClick={() => navigate("/")}>
                    <i class="fa-regular fa-circle-xmark fs-1"></i>
                </button>
            </div>
        </div>
    );
}
