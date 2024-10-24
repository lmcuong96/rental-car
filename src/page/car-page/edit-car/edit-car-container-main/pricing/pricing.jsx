import "./pricing.scss";
import {consumeContext, cs} from "cs-react";

export const Pricing = () => {

    return cs(
        consumeContext("car"),
        ({car, setCar}) => {

            // Hàm xử lý sự kiện khi checkbox được thay đổi
            const handleCheckboxChange = (key) => {
                car.setCar(prevState => ({
                    ...prevState,
                    [key]: !prevState[key], // Đảo ngược trạng thái của checkbox
                }));
            };
            console.log(car.car.noPet);
            return (
                <div>
                    <form className={"pricing-123sa"}>
                        {/*<div className={"d-flex  fs-4 justify-content-between w-75 fw-semibold"}>*/}
                        {/*    <div className={"d-flex flex-column  justify-content-between gap-3 my-5 fw-semibold"}>*/}
                        {/*        <label htmlFor="base-price">*/}
                        {/*            Base price:*/}
                        {/*        </label>*/}
                        {/*        <label htmlFor="required-depsit">*/}
                        {/*            Required deposit:*/}
                        {/*        </label>*/}

                        {/*    </div>*/}
                        {/*    <div className={"d-flex flex-column  justify-content-between gap-3 my-5 fw-semibold"}>*/}
                        {/*        <div>*/}
                        {/*            <input type="text" name="base-price" id="base-price"*/}
                        {/*                   className={"w-50 mx-5"}*/}
                        {/*                   value={car.basePrice}*/}
                        {/*                   onChange={() => handleCheckboxChange(car.basePrice)}/>*/}
                        {/*            <span>VND/Day</span>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <input type="text" name="required-depsit" id="required-depsit"*/}
                        {/*                   className={"w-50 mx-5"}*/}
                        {/*                   value={car.requiredDeposit}*/}
                        {/*                   onChange={() => handleCheckboxChange(car.requiredDeposit)}/>*/}
                        {/*            <span>VND</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div>
                            <p className={"fw-semibold fs-4"}>Term of use</p>
                            <div className={"term-of-use-sad2"}>
                                <div>
                                    <div>
                                        <input type="checkbox" name="no-smoking" id="no-smoking"
                                        checked={car.car.noSmoking}
                                        onChange={()=> handleCheckboxChange(car.car.noSmoking)}/>
                                        <label htmlFor="no-smoking">No Smoking</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="no-pet" id="no-pet"
                                        checked={car.car.noPet}
                                        onChange={()=> car.setCar(car.car.noPet)}/>
                                        <label htmlFor="no-pet">No pet</label>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <input type="checkbox" name="no-food-in-car" id="no-food-in-car"
                                        checked={car.noFoodInCar}
                                        onChange={()=> handleCheckboxChange(car.noFoodInCar)}/>
                                        <label htmlFor="no-food-in-car">No food in cars</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" name="other" id="other"
                                        checked={car.other}
                                        onChange={()=> handleCheckboxChange(car.other)}/>
                                        <label htmlFor="other">Other</label>
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
