import { Outlet } from "react-router-dom";
import { Footer } from "../component/Footer/Footer";
import { MainNavigation } from "../component/NavBar/MainNavigation";
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
