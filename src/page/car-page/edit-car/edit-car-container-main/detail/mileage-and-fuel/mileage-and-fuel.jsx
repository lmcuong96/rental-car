import {consumeContext, cs} from "cs-react";
import {Mileage} from "./mileage/mileage.jsx";
import {FuelConsumption} from "./fuel-consumption/fuel-consumption.jsx";

export const MileageAndFuel = () => {

    return cs(
        consumeContext("car"),
        ({car}) => {
            return (
                <>
                    <div className={"d-flex flex-column fw-bold col"}>
                        <Mileage car={car}/>
                    </div>
                    <div className={"d-flex flex-column fw-bold col"}>
                        <FuelConsumption car={car}/>
                    </div>
                </>
            )
        }
    )
}