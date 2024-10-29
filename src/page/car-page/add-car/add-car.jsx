import MiniNav from "../../Root/nav-bar/mini-nav/mini-nav.jsx";
import "./add-car.scss"
import {cs, State} from "cs-react";
import {BasicTab} from "./basic-tab/basic-tab.jsx";
import {DetailTab} from "./detail-tab/detail-tab.jsx";
import {PricingTab} from "./pricing-tab/pricing-tab.jsx";
import {FinishTab} from "./finish-tab/finish-tab.jsx";

export const AddCar = () => cs(
    (_, next) => State({initValue: "", next}),
    ['basicTab', (_, next) => BasicTab({next})],
    ['detailTab', (_, next) => DetailTab({initValue: "", next})],
    ['pricingTab', (_, next) => PricingTab({initValue: "", next})],
    ['finishTab', ({basicTab, detailTab, pricingTab}, next) => FinishTab({
        basicTab: basicTab.formControl,
        detailTab: detailTab.formControl,
        pricingTab: pricingTab.formControl,
        next
    })],
    ({basicTab, detailTab, pricingTab, finishTab, }) => {
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
                        <a className="nav-link" data-bs-toggle="pill" href="#step2" >Step 2: Details</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-bs-toggle="pill" href="#step3" >Step 3: Pricing</a>
                    </li>
                    <li className="nav-item col">
                        <a className="nav-link" data-bs-toggle="pill" href="#step4" id="finish-step" >Step 4: Finish</a>
                    </li>
                </ul>

                <div className="tab-content mt-4">
                    <div className="tab-pane fade show active step" id="step1">
                        {/*Step 1: BasicTab*/}
                        {basicTab.render()}
                        <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                            <button className="btn cancelBtn"
                                    type="button">Cancel
                            </button>
                            <button className="btn btn-primary nextBtn"
                                    onClick={()=>handleClick("step2")}
                                    type="button">Next
                            </button>
                        </div>
                    </div>
                    <div className="tab-pane fade step" id="step2">
                        {/*Step 2: Details*/}
                        {detailTab.render()}
                        <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                            <button className="btn cancelBtn"
                                    onClick={()=>handleClick("step1")}
                                    type="button">Cancel
                            </button>
                            <button className="btn btn-primary nextBtn"
                                    onClick={() => handleClick("step3")}
                                    type="button">Next
                            </button>
                        </div>
                    </div>
                    <div className="tab-pane fade step" id="step3">
                        {/*Step 3: Pricing*/}
                        {pricingTab.render()}
                        <div className="btn-group w-25 mx-auto d-flex justify-content-center gap-5">
                            <button className="btn cancelBtn"
                                    onClick={() => handleClick("step2")}
                                    type="button">Cancel
                            </button>
                            <button className="btn btn-primary nextBtn"
                                    onClick={() => handleClick("step4")}
                                    type="button">Next
                            </button>
                        </div>
                    </div>
                    <div className="tab-pane fade step" id="step4">
                        {/*Step 4: Finish*/}
                        {finishTab.render()}
                    </div>
                </div>
            </div>
        </>
    }
)