// App2.jsx
import { useState } from "react";
import Comp from "./Comp.jsx";
import { consumeContext, cs, provideContext } from "cs-react";

export const App2 = () => {
    const [carType, setCarType] = useState("BMW");

    return cs(
        ({}, next) => provideContext("car", { type: carType }, next), // Vẫn dùng context từ cs-react

        consumeContext("car"),
        ({ car }) => (
            <div>
                <h1>App2 Component</h1>
                <p>Car type from state: {car.type}</p>
                {/* Sử dụng state và Hook bình thường */}
                <input
                    type="text"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                />
                <Comp />
            </div>
        )
    );
}

