import {consumeContext, cs} from "cs-react";

export const BasicInfo = () => cs(
    consumeContext("car"),
    ({car}) => {
        return (
            <>
                <div className={"basic-tab-info-left-xzc"}>
                    <p>License plates: <span>{car.licensePlate}</span></p>
                    <p>Brand name: <span>{car.brand}</span></p>
                    <p>Production year: <span>{car.productionYear}</span></p>
                    <p>Transmission: <span>{car.transmissionType}</span></p>
                </div>
                <div className={"basic-tab-info-right-xzc"}>
                    <p>Color: <span>{car.color}</span></p>
                    <p>Model: <span>{car.model}</span></p>
                    <p>No. of seats: <span>{car.numOfSeats}</span></p>
                    <p>Fuel:<span>{car.fuelType}</span></p>
                </div>
            </>)
    }
)