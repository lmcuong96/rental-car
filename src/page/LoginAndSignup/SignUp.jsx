import { NavLink, useLocation, useNavigate } from "react-router-dom";
import style from "./loginAndSignup.module.css";

export function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();

    const isSignupPage = location.pathname === "/signup";

    return (
        <form
            className={
                `w-100 mx-5 ` + (isSignupPage ? style.active : style.inactive)
            }
            onClick={() => navigate("/signup")}
        >
            <h3 className="text-center fw-bold">NOT A MEMBER YET?</h3>
            <div>
                <label htmlFor="signupName" typeof="hidden"></label>
                <input
                    type="text"
                    id="signupName"
                    name="signupName"
                    placeholder="Your name"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div>
                <label htmlFor="signupEmail" typeof="hidden"></label>
                <input
                    type="email"
                    id="signupEmail"
                    name="signupEmail"
                    placeholder="Your email address"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div>
                <label htmlFor="signupPhone" typeof="hidden"></label>
                <input
                    type="text"
                    id="signupPhone"
                    name="signupPhone"
                    placeholder="Your phone number"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div>
                <label htmlFor="signPassword" typeof="hidden"></label>
                <input
                    type="password"
                    id="signPassword"
                    name="signPassword"
                    placeholder="Password"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div>
                <i className="w-100">
                    Use at least one letter, one number, and seven characters
                </i>
            </div>
            <div>
                <label htmlFor="rePassword" typeof="hidden"></label>
                <input
                    type="password"
                    id="rePassword"
                    name="rePassword"
                    placeholder="Confirm Password"
                    className="w-100 p-1 my-3 border border-black"
                />
            </div>
            <div className="my-3 d-flex justify-content-between">
                <div>
                    <input
                        type="radio"
                        id="customer"
                        name="customer"
                        value="customer"
                        className="mx-1"
                    />
                    <label htmlFor="customer">I want to rent a car</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="owner"
                        name="owner"
                        value="owner"
                        className="mx-1"
                    />
                    <label htmlFor="owner">I am a car owner</label>
                </div>
            </div>
            <div className="my-3 d-flex flex-wrap gap-2">
                <div>
                    <input
                        type="checkbox"
                        id="agreement"
                        name="agreement"
                        className="mx-1"
                    />
                    <label htmlFor="agreement" typeof="hidden">
                        I have read and agree with the
                    </label>
                </div>
                <NavLink
                    to="/termcondition"
                    className={
                        "link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" +
                        " " +
                        style["hover-italic"]
                    }
                >
                    Term and Conditions
                </NavLink>
            </div>
            <div className="my-3">
                <button className="btn btn-primary w-100 border border-black py-2">
                    <i className="fa-regular fa-user"></i>
                    <span className="ms-2">SIGN UP</span>
                </button>
            </div>
        </form>
    );
}
