import { Outlet } from "react-router-dom";
import { Footer } from "./Footer/Footer.jsx";
import { MainNavigation } from "./nav-bar/main-navigation.jsx";

export function Root() {
    return (
        <div className="root-container">
            <MainNavigation />
            <main className="content-xzcca">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
