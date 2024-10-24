import {consumeContext, cs} from "cs-react";

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
                            <div>
                                <i className="fa-brands fa-bluetooth"></i>
                                <label htmlFor="Bluetooth">Bluetooth</label>
                                <input
                                    type="checkbox"
                                    id="Bluetooth"
                                    checked={car.functionsBluetooth}
                                    onChange={() => handleCheckboxChange(car.functionsBluetooth)}
                                />
                            </div>
                            <div>
                                <i className="fa-solid fa-map"></i>
                                <label htmlFor="GPS">GPS</label>
                                <input
                                    type="checkbox"
                                    id="GPS"
                                    checked={car.functionsGPS}
                                    onChange={() => handleCheckboxChange(car.functionsGPS)}
                                />
                            </div>
                            <div>
                                <i className="fa-solid fa-camera"></i>
                                <label htmlFor="Camera">Camera</label>
                                <input
                                    type="checkbox"
                                    id="Camera"
                                    checked={car.functionsCamera}
                                    onChange={() => handleCheckboxChange(car.functionsCamera)}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fa-solid fa-sun"></i>
                                <label htmlFor="Sunroof">Sun roof</label>
                                <input
                                    type="checkbox"
                                    id="Sunroof"
                                    checked={car.functionsSunRoof}
                                    onChange={() => handleCheckboxChange(car.functionsSunRoof)}
                                />
                            </div>
                            <div>
                                <i className="fa-solid fa-lock-open"></i>
                                <label htmlFor="Child lock">Child lock</label>
                                <input
                                    type="checkbox"
                                    id="Child lock"
                                    checked={car.functionsChildLock}
                                    onChange={() => handleCheckboxChange(car.functionsChildLock)}
                                />
                            </div>
                            <div>
                                <i className="fa-solid fa-child-reaching"></i>
                                <label htmlFor="Child seat">Child seat</label>
                                <input
                                    type="checkbox"
                                    id="Child seat"
                                    checked={car.functionsChildSeat}
                                    onChange={() => handleCheckboxChange('functionsChildSeat')}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <i className="fa-solid fa-compact-disc"></i>
                                <label htmlFor="DVD">DVD</label>
                                <input
                                    type="checkbox"
                                    id="DVD"
                                    checked={car.functionsDVD}
                                    onChange={() => handleCheckboxChange('functionsDVD')}
                                />
                            </div>
                            <div>
                                <i className="fa-brands fa-usb"></i>
                                <label htmlFor="USB">USB</label>
                                <input
                                    type="checkbox"
                                    id="USB"
                                    checked={car.functionsUSB}
                                    onChange={() => handleCheckboxChange('functionsUSB')}
                                />
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    );
}
