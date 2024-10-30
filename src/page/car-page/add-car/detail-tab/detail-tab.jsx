import {cs, State} from "cs-react";
import {Input} from "../../common/input/input.jsx";
import './detail-tab.scss'
import {Textarea} from "../../common/textarea/textarea.jsx";
import {Checkbox} from "../../common/checkbox/checkbox.jsx";
import FileItem from "../../common/file-item/file-item.jsx";

export const DetailTab = ({next}) => cs(
    ['mileage', (_, next) => Input({value: "", field: "mileage", type: "number", next})],
    ['fuelConsumption', (_, next) => Input({value: "", field: "fuelConsumption", type: "number", next})],
    ['address', (_, next) => Input({value: "", field: "address", type: "text", next})],
    ['description', (_, next) => Textarea({value: "", field: "description", row: 10, next})],
    ['functionsBluetooth', (_, next) => Checkbox({field: "functionsBluetooth", value: false, next})],
    ['functionsGPS', (_, next) => Checkbox({field: "functionsGPS", value: false, next})],
    ['functionsCamera', (_, next) => Checkbox({field: "functionsCamera", value: false, next})],
    ['functionsSunRoof', (_, next) => Checkbox({field: "functionsSunRoof", value: false, next})],
    ['functionsChildLock', (_, next) => Checkbox({field: "functionsChildLock", value: false, next})],
    ['functionsChildSeat', (_, next) => Checkbox({field: "functionsChildSeat", value: false, next})],
    ['functionsDvd', (_, next) => Checkbox({field: "functionsDvd", value: false, next})],
    ['functionsUSB', (_, next) => Checkbox({field: "functionsUSB", value: false, next})],
    ['imageFrontFile', (_, next) => FileItem({label: "Front", file: null, next})],
    ['imageBackFile', (_, next) => FileItem({label: "Back", file: null, next,})],
    ['imageLeftFile', (_, next) => FileItem({label: "Left", file: null, next,})],
    ['imageRightFile', (_, next) => FileItem({label: "Right", file: null, next,})],
    ({
         mileage, fuelConsumption, address, description, functionsBluetooth,
         functionsGPS,
         functionsCamera,
         functionsSunRoof,
         functionsChildLock,
         functionsChildSeat,
         functionsDvd,
         functionsUSB,
         imageFrontFile,
         imageBackFile,
         imageLeftFile,
         imageRightFile,
     }) => {
        return next({
            render: ({showErrors}) => (
                <fieldset>
                    <div className="tab-detail detail">
                        <div className="detail-123"
                        >
                            <div className="mileage-and-fuel-123">
                                <div className="d-flex flex-column fw-bold col">
                                    <label className="fs-5">Mileage: <span
                                        className="text-danger">*</span></label>
                                    {mileage.render({showErrors})}
                                </div>
                                <div className="d-flex flex-column fw-bold col">
                                    <label className="fs-5">Fuel consumption: <span
                                        className="text-danger">*</span> </label>
                                    <div>
                                        {fuelConsumption.render({showErrors})}
                                        <span> liter/100km</span>
                                    </div>
                                </div>
                            </div>

                            <div className="address-and-description-123">
                                <div className="fw-bold col">
                                    <label className="fs-5">Address: <span
                                        className="text-danger">*</span></label>
                                    {address.render({showErrors})}
                                </div>
                                <div className="fw-bold col">
                                    <label className="fs-5">Description</label>
                                    {description.render()}
                                </div>
                            </div>

                            <div className="additional-function-123">
                                <p className="fs-5 fw-bold">Additional functions:</p>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-brands fa-bluetooth"></i>
                                            <label>Bluetooth</label>
                                            {functionsBluetooth.render()}
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-map"></i>
                                            <label>GPS</label>
                                            {functionsGPS.render()}
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-camera"></i>
                                            <label>Camera</label>
                                            {functionsCamera.render()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-sun"></i>
                                            <label>Sun roof</label>
                                            {functionsSunRoof.render()}
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-lock-open"></i>
                                            <label>Child lock</label>
                                            {functionsChildLock.render()}
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-child-reaching"></i>
                                            <label>Child seat</label>
                                            {functionsChildSeat.render()}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-solid fa-compact-disc"></i>
                                            <label>DVD</label>
                                            {functionsDvd.render()}
                                        </div>
                                        <div className="d-flex gap-2 align-items-center">
                                            <i className="fa-brands fa-usb"></i>
                                            <label>USB</label>
                                            {functionsUSB.render()}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="images-comps-123">
                                <p className="fs-5 fw-bold">Images: <span className="text-danger">*</span></p>
                                <div>
                                    <div className="image-sad1">
                                        <div className="image-container-1123">
                                            {imageFrontFile.render({showErrors})}
                                        </div>

                                        {/*Back Image Container*/}
                                        <div className="image-container-1123">
                                            {imageBackFile.render({showErrors})}
                                        </div>

                                        {/*Left Image Container*/}
                                        <div className="image-container-1123">
                                            {imageLeftFile.render({showErrors})}
                                        </div>

                                        {/*Right Image Container*/}
                                        <div className="image-container-1123">
                                            {imageRightFile.render({showErrors})}
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <p>Please include full 4 images of your vehicle</p>
                                    <p>File type: .jpg , .jpeg , .png, .gif</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
            ),
            mileage: mileage.value,
            fuelConsumption: fuelConsumption.value,
            address: address.value,
            description: description.value,
            functionsBluetooth: functionsBluetooth.value,
            functionsGPS: functionsGPS.value,
            functionsCamera: functionsCamera.value,
            functionsSunRoof: functionsSunRoof.value,
            functionsChildLock: functionsChildLock.value,
            functionsChildSeat: functionsChildSeat.value,
            functionsDvd: functionsDvd.value,
            functionsUSB: functionsUSB.value,
            imageFrontFile: imageFrontFile.value,
            imageBackFile: imageBackFile.value,
            imageLeftFile: imageLeftFile.value,
            imageRightFile: imageRightFile.value,
        })
    }
)