import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer.jsx";
import { MainNavigation } from "./nav-bar/main-navigation.jsx";
import { useLocation } from "react-router-dom";
export function Root() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
