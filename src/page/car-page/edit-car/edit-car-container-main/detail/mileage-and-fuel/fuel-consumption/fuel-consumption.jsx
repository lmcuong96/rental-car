import {bindInput, cs, State} from "cs-react";

export const FuelConsumption = ({fuelConsumption, next}) => cs(
    ["fuelConsumption", ({}, next) => State({initValue: fuelConsumption, next})],
    ({fuelConsumption}) => next(
        {
            render: () => (<>
                <label className={"fs-5"} htmlFor="fuel-consumption">Fuel consumption: </label>
                <div>
                    <input {...{
                        className: "w-75",
                        type: "text",
                        name: "fuel-consumption",
                        id: "fuel-consumption",
                        ...bindInput(fuelConsumption)
                    }} />
                    <span> liter/100km</span>
                </div>
            </>),
            value: fuelConsumption.value
        }
    )
)