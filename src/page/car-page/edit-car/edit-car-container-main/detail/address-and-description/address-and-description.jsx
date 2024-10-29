import {consumeContext, cs} from "cs-react";
import {addressLine} from "./address-line/address-line.jsx";
import {SelectLine} from "./select-line/select-line.jsx";

export const AddressAndDescription = ({car, next}) => cs(
    ['address', ({}, next) => addressLine({location: car.location, next})],
    ['city', ({address}, next) => SelectLine({next, field: "city", value: ["Hanoi", "HoChiMinh", "DaNang"]})],
    ['district', ({}, next) => SelectLine({next, field: "district", value: ["Caugiay", "Quan1", "Danang"]})],
    ['ward', ({}, next) => SelectLine({next, field: "ward", value: ["Maidich", "Quan1", "Danang"]})],
    ({address, city, district, ward}) => {
        return next({

            render: () => (
                <>
                    <div className={"fw-bold col"}>
                        <p className={"fs-5"}>Address: </p>
                        <div>
                            {address.render()}
                        </div>
                        <div>
                            {city.render()}
                        </div>
                        <div>
                            {district.render()}
                        </div>
                        <div>
                            {ward.render()}
                        </div>
                    </div>
                    <div className={"fw-bold col"}>
                        <div>
                            <p className={"fs-5"}>Description</p>
                            <textarea name="description" id="description" className={'w-100'} rows="10"></textarea>
                        </div>
                    </div>
                </>
            ),
            // formControls: {
            //     invalid: address.formControls.invalid,
            //     showErrors: address.formControls.showErrors,
            //     addData: address.formControls.addData
            // },
            value: {
                address:address.value,
                city:city.value,
                district:district.value,
                ward:ward.value
            }
        })
    }
)
