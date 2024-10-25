import {cs, State} from "cs-react";

export const Checkbox = ({car, field}) => {
    return cs(
        ["checkbox", ({}, next) => State({initValue: car[field], next})],
        ({checkbox}) => {
            // console.log(field + " " + checkbox.value);
            return (
                <>
                    <input type="checkbox" name={field} id={field}
                           checked={checkbox.value}
                           onChange={(e) => checkbox.onChange(e.target.checked)}/>
                </>
            )
        }
    )
}