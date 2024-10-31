import {bindInput, cs, State} from "cs-react";

export const RequiredDeposit = ({car, next}) => cs(
    ["requiredDeposit", ({}, next) => State({initValue: car.deposit, next})],
    ({requiredDeposit}) => next(
        {
            render: () => (<>
                <input {...{
                    type: "text",
                    name: "required-deposit",
                    id: "required-deposit",
                    ...bindInput(requiredDeposit),
                }}/>
                <span>VND</span>
            </>),
            value: requiredDeposit.value
        }
    )
);
