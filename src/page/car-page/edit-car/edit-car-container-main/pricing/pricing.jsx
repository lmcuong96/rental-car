import "./pricing.scss";
import {consumeContext, cs} from "cs-react";
import {BasePrice} from "./base-price/base-price.jsx";
import {RequiredDeposit} from "./required-deposit/required-deposit.jsx";
import {Checkbox} from "../common/checkbox/checkbox.jsx";


export const Pricing = () => {

    // const basePrice = BasePrice({car: consumeContext("car")})
    // console.log(basePrice);

    return cs(
        consumeContext("car"),
        ["basePrice", ({car}, next) => BasePrice({car, next})],

        ({basePrice}) => {
            console.log(basePrice);

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
                                    {/*<BasePrice car={car}/>*/}
                                    {basePrice.render()}
                                </div>
                                <div>
                                    {/*<RequiredDeposit car={car}/>*/}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className={"fw-semibold fs-4"}>Term of use</p>
                            <div className={"term-of-use-sad2"}>
                                <div>
                                    <div>
                                        {/*<Checkbox car={car} field={"noSmoking"}/>*/}
                                        <label>No smoking</label>

                                    </div>
                                    <div>
                                        {/*<Checkbox car={car} field={"noPet"}/>*/}
                                        <label>No pets</label>

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        {/*<Checkbox car={car} field={"noFoodInCar"}/>*/}
                                        <label>No food in cars</label>

                                    </div>
                                    <div>
                                        {/*<Checkbox car={car} field={"other"}/>*/}
                                        <label>Other</label>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"d-flex justify-content-center "}>
                            <button type={"reset"} className={" fs-5 btn border border-white"}>Discard</button>
                            <button type={"submit"}
                                    className={"fs-5 btn btn-primary border border-black rounded"}>Save
                            </button>
                        </div>
                    </form>
                </div>

            )
        }
    )
}