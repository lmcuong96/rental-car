import {cs, State} from "cs-react";

export function BasePrice({car}) {
    return {
        basePrice: cs(["basePrice", ({}, next) => State({initValue: car.basePrice, next})], ({basePrice}) => (
            <div>
                <label htmlFor="base-price">Base price:</label>
                <input type="text" name="base-price" id="base-price" value={basePrice.value}
                       onChange={(e) => basePrice.onChange(e.target.value)}/>
            </div>
        )),
        value : car.basePrice
    }

}