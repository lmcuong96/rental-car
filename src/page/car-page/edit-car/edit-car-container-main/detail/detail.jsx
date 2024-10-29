import {MileageAndFuel} from "./mileage-and-fuel/mileage-and-fuel.jsx";
import {AddressAndDescription} from "./address-and-description/address-and-description.jsx";
import './detail.scss';
import {AdditionalFunction} from "./additional-functions/additional-functions.jsx";
import {ImagesComps} from "./images-coms/images-comps.jsx";
import {consumeContext, cs} from "cs-react";


export const Detail = () => cs(
    consumeContext('car'),
    ['mileageAndFuel', ({car}, next) => MileageAndFuel({car, next})],
    ['addressAndDescription', ({car}, next) => AddressAndDescription({car, next})],
    ['additionalFunction',({},next) => AdditionalFunction({next})],
    ['imagesComps',({},next) => ImagesComps({next})],
    ({addressAndDescription,mileageAndFuel,additionalFunction,imagesComps}) => (
            <form className={"detail-123"}>
                <div className={"mileage-and-fuel-123"}>
                    {mileageAndFuel.render()}
                </div>
                <div className={"address-and-description-123"}>
                    {addressAndDescription.render()}
                </div>
                <div className={"additional-function-123"}>
                    {additionalFunction.render()}
                </div>
                <div className={"images-comps-123"}>
                    {imagesComps.render()}
                </div>
                <div className={"d-flex justify-content-center "}>
                    <button type={"reset"} className={" fs-5 btn border border-white"}>Discard</button>
                    <button {...{
                        className:"fs-5 btn btn-primary border border-black rounded",
                        onClick: e=>{
                            e.preventDefault();
                            alert(JSON.stringify({
                                mileageAndFuel:mileageAndFuel.value,
                                addressAndDescription:addressAndDescription.value,
                                additionalFunction:additionalFunction.value,
                                imagesComps:imagesComps.value
                            }))
                        }
                    }} >Save</button>
                </div>
            </form>
    )
)