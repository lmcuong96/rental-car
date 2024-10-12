import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./loginAndSignup.module.css";
export function Login() {
    const navigate = useNavigate();
    const location = useLocation();

    const isLoginPage = location.pathname === "/login";
    return (
        <form
            className={
                `w-100 mx-5 ` + (isLoginPage ? style.active : style.inactive)
            }
            onClick={() => navigate("/login")}
        >
            <h3 className="text-center fw-bold">LOG IN USING YOUR ACCOUNT</h3>
            <div>
                <label htmlFor="loginEmail" typeof="hidden"></label>
                <input
                    type="email"
                    id="loginEmail"
                    name="loginEmail"
                    placeholder="Your email address"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div>
                <label htmlFor="loginPassword" typeof="hidden"></label>
                <input
                    type="password"
                    id="loginPassword"
                    name="loginPassword"
                    placeholder="Password"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div className="my-2 w-100 text-center">
                <a
                    href="#/forgotpassword"
                    className={
                        "link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" +
                        " " +
                        style["hover-italic"]
                    }
                >
                    Forgot your passsword?
                </a>
            </div>
            <div className="my-3 w-100 text-center">
                <button className="btn btn-primary w-75 border border-black py-2">
                    <i className="fa-regular fa-user"></i>
                    <span className="ms-2">LOG IN</span>
                </button>
            </div>
        </form>
    );
}
