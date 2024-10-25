import {bindInput, cs, State} from "cs-react";

export const BasePrice = ({car, next}) => cs(
    ["basePrice", ({}, next) => State({initValue: car.basePrice, next})],
    ({basePrice}) => next({
        render: () => (
            <>
                <input {...{
                    type: "text",
                    name: "base-price",
                    id: "base-price",
                    ...bindInput(basePrice),
                    // value: basePrice.value,
                    // onChange: (e) => basePrice.onChange(e.target.value),
                }}/>
                <span>VND/day</span>
            </>
        ),
        value: basePrice.value, //car.basePrice
    }),
);
