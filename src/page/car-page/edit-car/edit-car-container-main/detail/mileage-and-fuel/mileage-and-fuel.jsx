import {consumeContext, cs} from "cs-react";
import {Mileage} from "./mileage/mileage.jsx";
import {FuelConsumption} from "./fuel-consumption/fuel-consumption.jsx";

export const MileageAndFuel = () => {

    return cs(
        consumeContext("car"),
        ['mileage', ({car}, next) => Mileage({mileage: car.mileage, next})],
        ['fuelConsumption', ({car}, next) => Mileage({fuelConsumption: car.fuelConsumption, next})],
        ({ mileage, fuelConsumption}) => {
            return (
                <>
                    <div className={"d-flex flex-column fw-bold col"}>
                        {mileage.render()}
                    </div>
                    <div className={"d-flex flex-column fw-bold col"}>
                        {fuelConsumption.render()}
                    </div>
                </>
            )
        }
    )
}