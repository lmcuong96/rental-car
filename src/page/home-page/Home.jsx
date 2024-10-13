import { Outlet, useLocation } from "react-router-dom";
import { FindUs } from "./find-us/find-us.jsx";
import { PeopleSay } from "./people-say/people-say.jsx";
import { WhyUs } from "./why-us/why-us.jsx";
import { HeaderForCustomer } from "../Root/Header/customer/header-for-customer.jsx";
import { HeaderForGuest } from "../Root/Header/guest/header-for-guest.jsx";

export function Home() {
    return (
        <div>
            <Outlet />
            <div className="my-4">
                <WhyUs />
                <PeopleSay />
                <FindUs />
            </div>
        </div>
    );
}
