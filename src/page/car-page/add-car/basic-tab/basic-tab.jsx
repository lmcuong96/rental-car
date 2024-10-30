import {cs, State} from "cs-react";
import {Input} from "../../common/input/input.jsx";
import {SelectOption} from "../../common/select-option/select-option.jsx";
import {SelectButton} from "../../common/select-button/select-button.jsx";
import FileItem from "../../common/file-item/file-item.jsx";

export const BasicTab = ({next}) => cs(
    ["licensePlates", (_, next) => Input({value: "", field: "licensePlates", type: "text", next})],
    ["color", (_, next) => SelectOption({value: ["Select Color", "Black", "White", "Red"], field: "color", next})],
    ["brandName", (_, next) => SelectOption({
        value: ["Select Brand", "Audi", "BMW", "Mercedes"],
        field: "brandName",
        next
    })],
    ["productionYear", (_, next) => SelectOption({
        value: ["Select Year", "2022", "2021", "2020"],
        field: "productionYear",
        next
    })],
    ["model", (_, next) => SelectOption({value: ["Select Model", "A4", "A6", "C3"], field: "model", next})],
    ["noOfSeats", (_, next) => SelectOption({value: ["Select Seats", "4", "5", "7"], field: "noOfSeats", next})],
    ["transmission", (_, next) => SelectButton({value: ["Automatic", "Manual"], rowId: "transmission", next})],
    ["fuel", (_, next) => SelectButton({value: ["Diesel", "Petrol"], rowId: "fuel", next})],
    ['registrationPaper', (_, next) => FileItem({
        label: "Registration Paper",
        file: null,
        next
    })],
    ['certificateOfInspection', (_, next) => FileItem({
        label: "Certificate Of Inspection",
        file: null,
        next
    })],
    ['insurance', (_, next) => FileItem({label: "Insurance", file: null, next})],
    ({
         licensePlates, brandName, model, color, productionYear,
         noOfSeats, fuel, transmission, registrationPaper,
         certificateOfInspection, insurance
     }) => {
        return next({
            render: ({showErrors}) => <fieldset>
                <div className="step-content active">
                    <p className="text-danger">
                        Note: Please check your information carefully, you will not be able
                        to change the basic details of your car, which is based on the registration
                        information.
                    </p>

                    <div className="container">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">License plate: <span
                                    className="text-danger">*</span></label>
                                {licensePlates.render({showErrors})}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Color: <span
                                    className="text-danger">*</span></label>
                                {color.render({showErrors})}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Brand name: <span
                                    className="text-danger">*</span></label>
                                {brandName.render({showErrors})}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Model: <span
                                    className="text-danger">*</span></label>
                                {model.render({showErrors})}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Production year: <span
                                    className="text-danger">*</span></label>
                                {productionYear.render({showErrors})}
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">No. of seats: <span
                                    className="text-danger">*</span></label>
                                {noOfSeats.render({showErrors})}
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Transmission: <span className="text-danger">*</span></label>
                                {transmission.render()}
                            </div>

                            <div className="col-md-6">
                                <label>Fuel: <span className="text-danger">*</span></label>
                                <div>
                                    {fuel.render()}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="my-2">
                        <p className="fs-4 fw-semibold">Documents:<span
                            className="text-danger">*</span></p>
                        <div className="row">
                            {/*Registration paper*/}
                            <div className="col-md-4">
                                <div className={"file-container-123"}>
                                    {registrationPaper.render({showErrors})}
                                </div>
                            </div>
                            {/*Certificate of inspection*/}
                            <div className="col-md-4">
                                <div className={'file-container-123'}>
                                    {certificateOfInspection.render({showErrors})}
                                </div>
                            </div>
                            {/*Insurance*/}
                            <div className="col-md-4">
                                <div className={'file-container-123'}>
                                    {insurance.render({showErrors})}
                                </div>
                            </div>
                        </div>
                        <p className="text-muted mt-3">File type: doc, docx, pdf, jpg, jpeg, png</p>
                    </div>
                </div>
            </fieldset>,
            licensePlates: licensePlates.value,
            brandName: brandName.value,
            model: model.value,
            color: color.value,
            productionYear: productionYear.value,
            noOfSeats: noOfSeats.value,
            fuel: fuel.value,
            transmission: transmission.value,
            registrationPaper: registrationPaper.value,
            certificateOfInspection: certificateOfInspection.value,
            insurance: insurance.value,
            invalid:
                licensePlates.invalid !== null
                || brandName.invalid !== null
                || model.invalid !== null
                || color.invalid !== null
                || productionYear.invalid !== null
                || noOfSeats.invalid !== null
                || registrationPaper.invalid !== null
                || certificateOfInspection.invalid !== null
                || insurance.invalid !== null
        })
    }
)
