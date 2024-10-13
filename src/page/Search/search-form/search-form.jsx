import {PickUpLocationComp} from "./pick-up-location-comp/pick-up-location-comp.jsx";
import {combineFormControls} from "../common/combineFormControls.jsx";
import {useState} from "react";
import {PickUpComp} from "./pick-up-comp/pick-up-comp.jsx";
import "./search-form.scss"
import {DropOffComp} from "./drop-off-comp/drop-off-comp.jsx";
export const SearchForm = () => {
    const [error, setError] = useState();
    const pickUpLocationLine = PickUpLocationComp();
    const pickUpDateAndTimeLine = PickUpComp();
    const dropOffComp= DropOffComp();

    const formControls = combineFormControls([pickUpLocationLine.formControl,
            pickUpDateAndTimeLine.formControl, dropOffComp.formControl]);

    return {

        render: () => <>

            <form className={"search-form-123"}>
                {error && <div className={"error"}>
                    {error}
                </div>}
                {pickUpLocationLine.render()}
                <div className={'row row-cols-2'}>
                    {/*Pick-up*/}
                    <div className="d-flex flex-column  col">
                        {pickUpDateAndTimeLine.render()}
                    </div>

                    {/*Drop-off*/}
                    <div className="d-flex flex-column col">
                        {dropOffComp.render()}{}
                    </div>
                </div>
                <div className="controls">
                    <button onClick={() => {
                        if (formControls.invalid) {
                            setError(formControls.showErrors())
                        } else {
                            setError("");
                            alert(formControls.json())
                        }
                    }}
                            className={"btn btn-primary my-4 py-2  mx-auto d-flex justify-content-center border-dark"}>
                        SEARCH
                    </button>
                </div>
            </form>
        </>
    }
}
