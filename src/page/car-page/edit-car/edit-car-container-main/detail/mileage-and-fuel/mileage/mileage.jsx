import {cs, State} from "cs-react";

export const Mileage = ({car}) => {
    return cs(
        ["mileage", ({}, next) => State({initValue: car.mileage, next})],
        ({mileage}) => (
            <>
                <label className={"fs-5"} htmlFor="mileage">Mileage: </label>
                <input type="text" name="milieage" id="milieage" value={mileage.value}
                       onChange={(e) => mileage.onChange(e.target.value)}/>
            </>
        )
    )
}