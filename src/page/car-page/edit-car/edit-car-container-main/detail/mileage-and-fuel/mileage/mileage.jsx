import {bindInput, cs, State} from "cs-react";

export const Mileage = ({mileage,next}) => cs(
    ["mileage", ({}, next) => State({initValue: mileage, next})],
    ({mileage}) => next(
        {
            render: () => (
                <>
                    <label className={"fs-5"} htmlFor="mileage">Mileage: </label>
                    <input {...{
                        type: "text",
                        name: "mileage",
                        id: mileage,
                        ...bindInput(mileage),
                    }} />
                </>
            ),
            value: mileage.value
        }
    )
)
