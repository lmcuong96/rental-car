import {consumeContext, cs} from "cs-react";
import {Mileage} from "./mileage/mileage.jsx";
import {FuelConsumption} from "./fuel-consumption/fuel-consumption.jsx";

export const MileageAndFuel = ({car, next}) => cs(
    ['mileage', ({}, next) => Mileage({mileage: car.mileage, next})],
    ['fuelConsumption', ({}, next) => FuelConsumption({fuelConsumption: car.fuelConsumption, next})],
    ({mileage, fuelConsumption}) => next({
        render: () => <>
            <div className={"d-flex flex-column fw-bold col"}>
                {mileage.render()}
            </div>
            <div className={"d-flex flex-column fw-bold col"}>
                {fuelConsumption.render()}
            </div>
        </>,
        value: {mileage: mileage.value, fuelConsumption: fuelConsumption.value}
    })
)
