import {useCar} from "../../../common/car-context.jsx";
import {consumeContext, cs} from "cs-react";

export const BasicInfo = () => cs(
    consumeContext("car"),
    ({car}) => (
        <>
            <div className={"basic-info-left-xzc"}>
                <p>License plates: <span>{car.licensePlates}</span></p>
                <p>Brand name: <span>{car.brandName}</span></p>
                <p>Production year: <span>{car.productionYear}</span></p>
                <p>Transmission: <span>{car.transmission.toString()}</span></p>
            </div>
            <div className={"basic-info-right-xzc"}>
                <p>Color: <span>{car.color}</span></p>
                <p>Model: <span>{car.model}</span></p>
                <p>No. of seats: <span>{car.noOfSeats}</span></p>
                <p>Fuel:<span>{car.fuel.toString()}</span></p>
            </div>
        </>)
)