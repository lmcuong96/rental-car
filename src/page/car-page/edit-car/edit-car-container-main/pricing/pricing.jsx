import "./pricing.scss";
import {consumeContext, cs} from "cs-react";
import {BasePrice} from "./base-price/base-price.jsx";
import {RequiredDeposit} from "./required-deposit/required-deposit.jsx";
import {Checkbox} from "../../../common/checkbox/checkbox.jsx";


export const Pricing = () => {

    return cs(
        consumeContext("car"),
        ["basePrice", ({car}, next) => BasePrice({car, next})],
        ['requiredDeposit', ({car}, next) => RequiredDeposit({car, next})],
        ['noSmoking', ({car}, next) => Checkbox({field: car.noSmoking, next})],
        ['noPets', ({car}, next) => Checkbox({field: car.noPet, next})],
        ['noFoodInCar', ({car}, next) => Checkbox({field: car.noFoodInCar, next})],
        ['other', ({car}, next) => Checkbox({field: car.other, next})],
        ({basePrice, requiredDeposit, noSmoking, noPets, noFoodInCar, other}) => {
            return (
                <div>
                    <form className={"pricing-123sa"}>
                        <div className={"d-flex  fs-4 justify-content-between w-75 fw-semibold"}>
                            <div className={"d-flex flex-column  justify-content-between gap-3 my-5 fw-semibold"}>
                                <label htmlFor="base-price">
                                    Base price:
                                </label>
                                <label htmlFor="required-depsit">
                                    Required deposit:
                                </label>

                            </div>
                            <div className={"d-flex flex-column  justify-content-between gap-3 my-5 fw-semibold"}>
                                <div>
                                    {basePrice.render()}
                                </div>
                                <div>
                                    {requiredDeposit.render()}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={"fw-semibold fs-4"}>Term of use</p>
                            <div className={"term-of-use-sad2"}>
                                <div>
                                    <div>
                                        {noSmoking.render()}
                                        <label>No smoking</label>
                                    </div>
                                    <div>
                                        {noPets.render()}
                                        <label>No pets</label>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {noFoodInCar.render()}
                                        <label>No food in cars</label>
                                    </div>
                                    <div>
                                        {other.render()}
                                        <label>Other</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-center "}>
                            <button type={"reset"} className={" fs-5 btn border border-white"}>Discard</button>
                            <button type={"submit"}
                                    className={"fs-5 btn btn-primary border border-black rounded"}
                                    onClick={() => {
                                        alert(
                                            JSON.stringify({
                                                basePrice,
                                                requiredDeposit,
                                                noSmoking,
                                                noPets,
                                                noFoodInCar,
                                                other
                                            })
                                        )
                                    }}
                            >Save
                            </button>
                        </div>
                    </form>
                </div>
            )
        }
    )
}