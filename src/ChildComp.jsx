// ChildComp.jsx
import {consumeContext, cs} from "cs-react";

export const ChildComp = () => cs(
    consumeContext("car"), // Consume dữ liệu từ context "car"
    ({car}) => (
        <div>
            <h1>Child comp</h1>
            <p>Car type: {car.type}</p> {/* Hiển thị dữ liệu từ context */}
        </div>
    )
);
