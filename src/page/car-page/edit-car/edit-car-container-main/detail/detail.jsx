import {MileageAndFuel} from "./mileage-and-fuel/mileage-and-fuel.jsx";
import {AddressAndDescription} from "./address-and-description/address-and-description.jsx";
import './detail.scss';
import {AdditionalFunction} from "./additional-functions/additional-functions.jsx";
import {ImagesComs} from "./images-coms/images-coms.jsx";


export const Detail = () => <>
    <form className={"detail-123"}>
        <div className={"mileage-and-fuel-123"}>
            <MileageAndFuel/>
        </div>
        <div className={"address-and-description-123"}>
            <AddressAndDescription/>
        </div>
        <div className={"additional-function-123"}>
            <AdditionalFunction/>
        </div>
        <div className={"images-comps-123"}>
            <ImagesComs/>
        </div>
        <div className={"d-flex justify-content-center "}>
            <button type={"reset"} className={" fs-5 btn border border-white"}>Discard</button>
            <button type={"submit"} className={"fs-5 btn btn-primary border border-black rounded"}>Save</button>
        </div>
    </form>
</>;