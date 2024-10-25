import {consumeContext, cs} from "cs-react";
import {Checkbox} from "../../common/checkbox/checkbox.jsx";

export function AdditionalFunction() {
    return cs(
        consumeContext('car'),
        ({car, setCar}) => {
            const handleCheckboxChange = (key) => {
                setCar(prevState => ({
                    ...prevState,
                    [key]: !prevState[key],
                }));
            };

            return (
                <>
                    <p className="fs-5 fw-bold">Additional functions:</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-brands fa-bluetooth"></i>
                                <label>Bluetooth</label>
                                <Checkbox car={car} field="functionsBluetooth"/>
                            </div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-map"></i>
                                <label htmlFor="GPS">GPS</label>
                                <Checkbox car={car} field="functionsGPS"/>

                            </div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-camera"></i>
                                <label htmlFor="Camera">Camera</label>
                                <Checkbox car={car} field="functionsCamera"/>

                            </div>
                        </div>
                        <div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-sun"></i>
                                <label htmlFor="Sunroof">Sun roof</label>
                                <Checkbox car={car} field="functionsSunRoof"/>

                            </div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-lock-open"></i>
                                <label htmlFor="Child lock">Child lock</label>
                                <Checkbox car={car} field="functionsChildLock"/>

                            </div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-child-reaching"></i>
                                <label htmlFor="Child seat">Child seat</label>
                                <Checkbox car={car} field="functionsChildSeat"/>
                            </div>
                        </div>
                        <div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-solid fa-compact-disc"></i>
                                <label htmlFor="DVD">DVD</label>
                                <Checkbox car={car} field="functionsDVD"/>
                            </div>
                            <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                <i className="fa-brands fa-usb"></i>
                                <label htmlFor="USB">USB</label>
                                <Checkbox car={car} field="functionsUSB"/>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    );
}
