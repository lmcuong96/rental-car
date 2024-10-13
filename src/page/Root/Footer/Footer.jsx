import { NavLink } from "react-router-dom";
import style from "./footer.module.css";
export function Footer() {
    return (
        <footer className="bg-body-secondary p-5">
            <ul className=" list-unstyled d-flex justify-content-evenly ">
                <li>
                    <h3>RENT CARS</h3>
                    <NavLink
                        className={` nav-link text-decoration-none ${style["custom-link"]}`}
                    >
                        Search Cars and Rates
                    </NavLink>
                </li>
                <li>
                    <h3>CUSTOMER ACCESS</h3>
                    <div className="d-flex flex-column">
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            Manage My Booking
                        </NavLink>
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            My Wallet
                        </NavLink>
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            My Car
                        </NavLink>
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            Log in
                        </NavLink>
                    </div>
                </li>
                <li>
                    <h3>JOIN US</h3>
                    <div className="d-flex flex-column">
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            New User
                        </NavLink>
                        <NavLink
                            className={` nav-link text-decoration-none ${style["custom-link"]}`}
                        >
                            Sign Up
                        </NavLink>
                    </div>
                </li>
            </ul>
        </footer>
    );
}
