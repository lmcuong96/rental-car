import {useCar} from "../../../common/car-context.jsx";
import {consumeContext, cs} from "cs-react";

export const MileageAndFuel = () => {

    return cs(
        consumeContext("car"),
        ({car, setCar}) => {
            // Hàm xử lý sự kiện khi checkbox được thay đổi
            const handleCheckboxChange = (key) => {
                setCar(prevState => ({
                    ...prevState,
                    [key]: !prevState[key], // Đảo ngược trạng thái của checkbox
                }));
            };
            return (
                <>
                    <div className={"d-flex flex-column fw-bold col"}>
                        <label className={"fs-5"} htmlFor="mileage">Mileage: </label>
                        <input type="text" name="milieage" id="milieage" value={car.mileage} onChange={()=> handleCheckboxChange(car.mileage)}/>
                    </div>
                    <div className={"d-flex flex-column fw-bold col"}>
                        <label className={"fs-5"} htmlFor="fuel-consumption">Fuel consumption: </label>
                        <div>
                            <input className={"w-75"} type="text" name=" fuel-consumption " id=" fuel-consumption"
                                   value={car.fuelConsumption}
                                   onChange={()=> handleCheckboxChange(car.fuelConsumption)}/>
                            <span> liter/100km</span>
                        </div>
                    </div>
                </>
            )
        }
    )
}