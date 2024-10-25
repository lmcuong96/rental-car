import {bindInput, cs, State} from "cs-react";

export const BasePrice = ({car, next}) => cs(
    ["basePrice", ({}, next) => State({initValue: car.basePrice, next})],
    ({basePrice}) => next({
        render: () => (
            <div>
                <label htmlFor="base-price">Base price:</label>
                <input {...{
                    type: "text",
                    name: "base-price",
                    id: "base-price",
                    ...bindInput(basePrice),
                    // value: basePrice.value,
                    // onChange: (e) => basePrice.onChange(e.target.value),
                }}/>
            </div>
        ),
        value: basePrice.value, //car.basePrice
    }),
);
