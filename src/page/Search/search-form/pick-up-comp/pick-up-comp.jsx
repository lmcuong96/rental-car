import {PickUpDate} from "./pick-up-date/pick-up-date.jsx";
import {PickUpTime} from "./pick-up-time/pick-up-time.jsx";
import {combineFormControls} from "../../common/combineFormControls.jsx";

export const PickUpComp = () => {

    const pickUpTime = PickUpTime();
    const pickUpDate = PickUpDate();
    const pickUpDateAndTime = combineFormControls([pickUpDate.formControl, pickUpTime.formControl])
    return {
        formControl: {
            invalid: pickUpDateAndTime.invalid,
            showErrors: pickUpDateAndTime.showErrors,
            addData: (ret) => {
                const dateTimeObject = JSON.parse(pickUpDateAndTime.json());
                const pickDate = dateTimeObject.date;
                const pickTime = dateTimeObject.time;
                return {...ret,  pickDate,  pickTime}
            }
        },
        render: () => {
            return (
                <>
                    <p className="fs-5">
                        PICK-UP DATE AND TIME
                    </p>
                    <div className={'d-flex gap-3'}>
                        <div className="d-flex justify-content-between align-items-center gap-2 col-8">
                            {pickUpDate.render()}
                        </div>
                        <div>
                            {pickUpTime.render()}
                        </div>
                    </div>
                </>
            );
        }
    }
}

