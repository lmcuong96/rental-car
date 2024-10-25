import {cs, State} from "cs-react";

export const FuelConsumption = ({car}) => cs(
    ["fuelConsumption", ({}, next) => State({initValue: car.fuelConsumption, next})],
    ({fuelConsumption}) => (
        <>
            <label className={"fs-5"} htmlFor="fuel-consumption">Fuel consumption: </label>
            <div>
                <input className={"w-75"} type="text" name=" fuel-consumption " id=" fuel-consumption"
                       value={fuelConsumption.value}
                       onChange={(e) => fuelConsumption.onChange(e.target.value)}/>
                <span> liter/100km</span>
            </div>
        </>
    )
)