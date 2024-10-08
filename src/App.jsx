import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { Home } from "./page/Home";
import { Root } from "./page/Root";

function App() {
    const router = createHashRouter([
        {
            path: "/",
            id: "root",
            element: <Root />,
            children: [
                {
                    path: "/",
                    id: "home",
                    element: <Home />,
                },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
