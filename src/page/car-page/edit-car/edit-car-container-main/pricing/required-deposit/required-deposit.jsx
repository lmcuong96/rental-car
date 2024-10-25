import {cs, State} from "cs-react";

export const RequiredDeposit = ({car}) => {
    return cs(
        ["requiredDeposit", ({}, next) => State({initValue: car.requiredDeposit, next})],
        ({requiredDeposit}) => (
            <>
                <input type="text" name="required-depsit" id="required-depsit"
                       className={"w-50 mx-5"}
                       value={requiredDeposit.value}
                       onChange={(e) => requiredDeposit.onChange(e.target.value)}/>
                <span>VND</span>
            </>
        )
    );
}