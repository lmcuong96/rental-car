import {cs} from "cs-react";
import {Input} from "../../common/input/input.jsx";
import './pricing-tab.scss'
import {Checkbox} from "../../common/checkbox/checkbox.jsx";

export const PricingTab = ({next}) => cs(
    ['basePrice', (_, next) => Input({value: "", field: "basePrice", type: "number", next})],
    ['deposit', (_, next) => Input({value: "", field: "deposit", type: "number", next})],
    ['noSmoking', (_, next) => Checkbox({value: false, field: "noSmoking", next})],
    ['noPets', (_, next) => Checkbox({value: false, field: "noPets", next})],
    ['noFoodInCar', (_, next) => Checkbox({value: false, field: "noFoodInCar", next})],
    ['other', (_, next) => Checkbox({value: false, field: "other", next})],
    ({
         basePrice, deposit, noSmoking,
         noPets,
         noFoodInCar,
         other,
     }) => next({
        render: ({showErrors}) => (<fieldset>
                <div className="tab-content pricing">
                    <div className="pricing-123sa">

                        <div className={"d-flex justify-content-between fs-3 fw-semibold"}>
                            <div className="w-75 my-5 ">
                                <p>Base price:</p>
                                <p>Deposit:</p>
                            </div>

                            <div className="w-75 d-flex flex-column gap-3 my-5">
                                <div>
                                    {basePrice.render({showErrors})}
                                    <span>VND/Day</span>
                                </div>
                                <div>
                                    {deposit.render({showErrors})}
                                    <span>VND</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className="fw-semibold fs-3">Term of use</p>
                            <div className="term-of-use-cvs">
                                <div className={"child-154xz"}>
                                    <div>
                                        {noSmoking.render()}
                                        <label>No Smoking</label>
                                    </div>
                                    <div>
                                        {noPets.render()}
                                        <label>No pet</label>
                                    </div>
                                </div>
                                <div className={"child-154xz"}>
                                    <div>
                                        {noFoodInCar.render()}
                                        <label>No food in car</label>
                                    </div>
                                    <div>
                                        {other.render()}
                                        <label>Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
        ),
        basePrice: basePrice.value,
        deposit: deposit.value,
        noSmoking: noSmoking.value,
        noPets: noPets.value,
        noFoodInCar: noFoodInCar.value,
        other: other.value
    })
)