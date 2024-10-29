import {consumeContext, cs} from "cs-react";
import {Checkbox} from "../../../../common/checkbox/checkbox.jsx";

export function AdditionalFunction({next}) {
    return cs(
        consumeContext('car'),
        ['functionsBluetooth', ({car}, next) => Checkbox({
            value: car.functionsBluetooth,
            field: "functionsBluetooth",
            next
        })],
        ['functionsGPS', ({car}, next) => Checkbox({value: car.functionsGPS, field: "functionsGPS", next})],
        ['functionsCamera', ({car}, next) => Checkbox({value: car.functionsCamera, field: "functionsCamera", next})],
        ['functionsSunRoof', ({car}, next) => Checkbox({value: car.functionsSunRoof, field: "functionsSunRoof", next})],
        ['functionsChildLock', ({car}, next) => Checkbox({
            value: car.functionsChildLock,
            field: "functionsChildLock",
            next
        })],
        ['functionsChildSeat', ({car}, next) => Checkbox({
            value: car.functionsChildSeat,
            field: "functionsChildSeat",
            next
        })],
        ['functionsDVD', ({car}, next) => Checkbox({value: car.functionsDVD, field: "functionsDvd", next})],
        ['functionsUSB', ({car}, next) => Checkbox({value: car.functionsUSB, field: "functionsUSB", next})],
        ({
             functionsBluetooth,
             functionsGPS,
             functionsCamera,
             functionsSunRoof,
             functionsChildLock,
             functionsChildSeat,
             functionsDVD,
             functionsUSB
         }) => {

            return next({
                render: () => (
                    <>
                        <p className="fs-5 fw-bold">Additional functions:</p>
                        <div className="d-flex justify-content-between">
                            <div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-brands fa-bluetooth"></i>
                                    <label>Bluetooth</label>
                                    {functionsBluetooth.render()}
                                </div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-map"></i>
                                    <label htmlFor="GPS">GPS</label>
                                    {functionsGPS.render()}
                                </div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-camera"></i>
                                    <label htmlFor="Camera">Camera</label>
                                    {functionsCamera.render()}
                                </div>
                            </div>
                            <div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-sun"></i>
                                    <label htmlFor="Sunroof">Sun roof</label>
                                    {functionsSunRoof.render()}
                                </div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-lock-open"></i>
                                    <label htmlFor="Child lock">Child lock</label>
                                    {functionsChildLock.render()}
                                </div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-child-reaching"></i>
                                    <label htmlFor="Child seat">Child seat</label>
                                    {functionsChildSeat.render()}
                                </div>
                            </div>
                            <div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-solid fa-compact-disc"></i>
                                    <label htmlFor="DVD">DVD</label>
                                    {functionsDVD.render()}
                                </div>
                                <div className={"d-flex justify-content between gap-2 align-items-center"}>
                                    <i className="fa-brands fa-usb"></i>
                                    <label htmlFor="USB">USB</label>
                                    {functionsUSB.render()}
                                </div>
                            </div>
                        </div>
                    </>
                ),
                value: {
                    functionsBluetooth: functionsBluetooth.value,
                    functionsGPS: functionsGPS.value,
                    functionsCamera: functionsCamera.value,
                    functionsSunRoof: functionsSunRoof.value,
                    functionsChildLock: functionsChildLock.value,
                    functionsChildSeat: functionsChildSeat.value,
                    functionsDVD: functionsDVD.value,
                    functionsUSB: functionsUSB.value
                }
            })
        }
    );
}
