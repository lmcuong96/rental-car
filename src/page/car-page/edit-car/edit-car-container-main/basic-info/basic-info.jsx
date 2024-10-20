import {consumeContext, cs} from "cs-react";

export const BasicInfo = () => cs(
    consumeContext('car'),
    ({car}) => (
        <>
            <div className={"basic-info-left-xzc"}>
                <p>License plates: <span>{car.id}</span></p>
                <p>Brand name: <span></span></p>
                <p>Production year: <span></span></p>
                <p>Transmission: <span></span></p>
            </div>
            <div className={"basic-info-right-xzc"}>
                <p>Color: <span></span></p>
                <p>Model: <span></span></p>
                <p>No. of seats: <span></span></p>
                <p>Fuel:<span></span></p>
            </div>
        </>)
)