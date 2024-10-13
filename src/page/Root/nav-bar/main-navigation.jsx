import { NavLink } from "react-router-dom";
import './nav.scss'
export function MainNavigation() {
    return (
        <>
            <nav className="main-navigation bg-1 px-3  ">
                <ul className="list-unstyled row justify-content-between mb-0 border-bottom mx-2">
                    <li className="px-2 col-7">
                        <NavLink
                            to="/"
                            className=" d-flex gap-3 align-items-center text-light text-decoration-none fs-1"
                        >
                            <i className="fa-solid fa-car"></i>
                            <p>Rent a car today!</p>
                        </NavLink>
                    </li>
                    <li className="border-end border-start col-2 fs-5 d-flex align-items-center justify-content-center">
                        <NavLink
                            to="/about"
                            className=" text-light text-decoration-none"
                        >
                            ABOUT US
                        </NavLink>
                    </li>
                    <li className=" col-2 fs-5 d-flex align-items-center justify-content-center gap-3">
                        <NavLink
                            to="/signup"
                            className="text-light text-decoration-none border-end  px-2"
                        >
                            <i className="fa-solid fa-circle-user"></i>
                            <span> SIGN UP</span>
                        </NavLink>
                        <NavLink
                            to="/login"
                            className="text-light text-decoration-none"
                        >
                            {" "}
                            LOG IN
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}
