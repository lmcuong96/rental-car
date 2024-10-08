import { Outlet, useLocation } from "react-router-dom";
import { FindUs } from "../component/HomePage/FindUs/FindUs";
import { PeopleSay } from "../component/HomePage/PeopleSay/PeopleSay";
import { WhyUs } from "../component/HomePage/WhyUs/WhyUs";
import { HeaderForCustomer } from "../component/Header/HeaderForCustomer";
import { HeaderForGuest } from "../component/Header/HeaderForGuest";

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
