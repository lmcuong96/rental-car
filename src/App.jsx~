import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./page/home-page/Home.jsx";
import { Root } from "./page/Root/Root.jsx";
import { HeaderForGuest } from "./page/Root/Header/guest/header-for-guest.jsx";
import { HeaderForCustomer } from "./page/Root/Header/customer/header-for-customer.jsx";
import { HeaderForCarOwner } from "./page/Root/Header/car-owner/header-for-car-owner.jsx";
import { LoginAndSignup } from "./page/login-and-signup/login-and-signup.jsx";
import { ResetPassword } from "./page/ResetPassword";
import {Search} from "./page/Search/search.jsx";


function App() {
    const router = createHashRouter([
        {
            path: "/",
            id: "root",
            element: <Root />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                    children: [
                        {
                            index: true,
                            element: <HeaderForGuest />,
                        },
                        {
                            path: "customer",
                            element: <HeaderForCustomer />,
                        },
                        {
                            path: "car-owner",
                            element: <HeaderForCarOwner />,
                        },
                    ],
                },
                {
                    path: "login",
                    element: <LoginAndSignup />,
                },
                {
                    path: "signup",
                    element: <LoginAndSignup />,
                },
                {
                    path: "forgotpassword",
                    element: <ResetPassword />,
                },
                {
                    path:"search",
                    element:<Search/>
                }
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
