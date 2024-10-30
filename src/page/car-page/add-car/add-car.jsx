import MiniNav from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./add-car.scss"
import {cs, State} from "cs-react";
import {BasicTab} from "./basic-tab/basic-tab.jsx";
import {DetailTab} from "./detail-tab/detail-tab.jsx";
import {PricingTab} from "./pricing-tab/pricing-tab.jsx";
import {FinishTab} from "./finish-tab/finish-tab.jsx";

export const AddCar = () => cs(
    // (_, next) => State({initValue: "", next}),
    ['basicTab', (_, next) => BasicTab({next})],
    ['detailTab', (_, next) => DetailTab({next})],
    ['pricingTab', (_, next) => PricingTab({next})],
    ['finishTab', ({basicTab, detailTab, pricingTab}, next) => FinishTab({
        previewImages: [
            detailTab.imageFrontFile,
            detailTab.imageBackFile,
            detailTab.imageLeftFile,
            detailTab.imageRightFile,
        ],
        summary: {
            title: (
                basicTab.brandName && basicTab.model && basicTab.productionYear
                    ? basicTab.brandName + ' ' + basicTab.model + ' ' + basicTab.productionYear : 'Not Selected'
            ),
            noOfRides: basicTab.noOfSeats,
            address: detailTab.address,
            price: pricingTab.basePrice,
        },
        formControl: {
            licensePlates: basicTab.licensePlates,
            brandName: basicTab.brandName,
            model: basicTab.model,
            color: basicTab.color,
            productionYear: basicTab.productionYear,
            noOfSeats: basicTab.noOfSeats,
            fuel: basicTab.fuel,
            transmission: basicTab.transmission,
            registrationPaper: basicTab.registrationPaper,
            certificateOfInspection: basicTab.certificateOfInspection,
            insurance: basicTab.insurance,
            mileage: detailTab.mileage,
            fuelConsumption: detailTab.fuelConsumption,
            address: detailTab.address,
            description: detailTab.description,
            functionsBluetooth: detailTab.functionsBluetooth,
            functionsGPS: detailTab.functionsGPS,
            functionsCamera: detailTab.functionsCamera,
            functionsSunRoof: detailTab.functionsSunRoof,
            functionsChildLock: detailTab.functionsChildLock,
            functionsChildSeat: detailTab.functionsChildSeat,
            functionsDvd: detailTab.functionsDvd,
            functionsUSB: detailTab.functionsUSB,
            imageFrontFile: detailTab.imageFrontFile,
            imageBackFile: detailTab.imageBackFile,
            imageLeftFile: detailTab.imageLeftFile,
            imageRightFile: detailTab.imageRightFile,
            basePrice: pricingTab.basePrice,
            deposit: pricingTab.deposit,
            noSmoking: pricingTab.noSmoking,
            noPets: pricingTab.noPets,
            noFoodInCar: pricingTab.noFoodInCar,
            other: pricingTab.other
        },

        next
    })],
    ({basicTab, detailTab, pricingTab, finishTab,}) => {

        const miniNav = [
            {content: "Home", link: "/cars"},
            {content: "My Car", link: "/my-cars"},
            {content: "Add Car", link: "/add-car"}
        ]
        const handleClick = (nextTabId) => {
            document.querySelector('.tab-pane.active').classList.remove('show', 'active');
            const nextTab = document.querySelector(`#${nextTabId}`);
            if (nextTab) {
                nextTab.classList.add('show', 'active');
                document.querySelector('.nav-link.active').classList.remove('active');
                document.querySelector(`a[href="#${nextTabId}"]`).classList.add('active');
            }
        };
        return <>
            <div className={"mini-nav-23r"}>
                {miniNav.map((nav, index) => <MiniNav key={nav.content} contents={nav.content} links={nav.link}
                                                      index={index} lastElement={miniNav.length - 1}/>)}
            </div>
            <div className="my-3">
                <ul className="nav nav-pills justify-content-between step-nav">
                    <li className="nav-item col">
                        <a className="nav-link active" data-bs-toggle="pill" href="#step1" >Step 1: Basic</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-bs-toggle="pill" href="#step2">Step 2: Details</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-bs-toggle="pill" href="#step3">Step 3: Pricing</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-bs-toggle="pill" href="#step4" id="finish-step">Step 4: Finish</a>
                    </li>
                </ul>

                <div className="tab-content mt-4">
                    {cs(
                        ["showErrors", (_, next) => State({initValue: false,next})],
                        ({showErrors}) => (
                            <div className="tab-pane fade show active step" id="step1">
                                {/*Step 1: BasicTab*/}
                                {basicTab.render({
                                    showErrors: showErrors.value,
                                })}
                                <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                                    <button className="btn cancelBtn"
                                            type="button">Cancel
                                    </button>
                                    <button className="btn btn-primary nextBtn"
                                            disabled={showErrors.value === !showErrors.value}
                                            onClick={() => {
                                                if (showErrors.value === true) {
                                                    handleClick("step2")
                                                } else showErrors.onChange(true)
                                            }}
                                            type="button">Next
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                    {cs(
                        ["showErrors", (_, next) => State({next})],
                        ({showErrors}) => (
                            <div className="tab-pane fade step" id="step2">
                                {/*Step 2: Details*/}
                                {detailTab.render({
                                    showErrors: showErrors.value,
                                })}
                                <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                                    <button
                                        className="btn cancelBtn"
                                        onClick={() => handleClick("step1")}
                                        type="button">Cancel
                                    </button>
                                    <button
                                        className="btn btn-primary nextBtn"
                                        onClick={() => {
                                            if (showErrors.value === true) {
                                                handleClick("step3");
                                            } else showErrors.onChange(true);
                                        }}
                                        type="button">Next
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                    {
                        cs(
                            ["showErrors", (_, next) => State({next})],
                            ({showErrors}) => (
                                <div className="tab-pane fade step" id="step3">
                                    {/*Step 3: Pricing*/}
                                    {pricingTab.render({
                                        showErrors: showErrors.value,
                                    })}
                                    <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                                        <button
                                            className="btn cancelBtn"
                                            onClick={() => handleClick("step2")}
                                            type="button">Cancel
                                        </button>
                                        <button
                                            className="btn btn-primary nextBtn"
                                            onClick={() => {
                                                if (showErrors.value === true) {
                                                    handleClick("step4");
                                                } else showErrors.onChange(true);
                                            }}
                                            type="button">Next
                                        </button>
                                    </div>
                                </div>
                            )
                        )
                    }
                    <div className="tab-pane fade step" id="step4">
                        {/*Step 4: Finish*/}
                        {finishTab.render()}
                    </div>
                </div>
            </div>
        </>
    }
)