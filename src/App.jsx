import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Root } from "./page/Root";
import { HeaderForGuest } from "./component/Header/HeaderForGuest";
import { HeaderForCustomer } from "./component/Header/HeaderForCustomer";
import { HeaderForCarOwner } from "./component/Header/HeaderForCarOwner";
import { LoginAndSignup } from "./page/LoginAndSignup/LoginAndSignup";
import { ResetPassword } from "./page/ResetPassword";

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
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
