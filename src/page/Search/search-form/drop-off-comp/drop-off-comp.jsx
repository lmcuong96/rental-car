import {DropOffTime} from "./drop-off-time/drop-off-time.jsx";
import {DropOffDate} from "./drop-off-date/drop-off-date.jsx";
import {combineFormControls} from "../../common/combineFormControls.jsx";

export const DropOffComp = () => {
    const dropOffTime = DropOffTime();
    const dropOffDate = DropOffDate();

    const dropOffComp = combineFormControls([dropOffTime.formControl, dropOffDate.formControl]);
    return {
        formControl: {
            invalid: dropOffComp.invalid,
            showErrors: dropOffDate.showErrors,
            addData: (ret) => {
                const dateTimeObject = JSON.parse(dropOffComp.json());
                const dropDate = dateTimeObject.date;
                const dropTime = dateTimeObject.time;
                return {...ret,  dropDate, dropTime}
            }
        },
        render: () => {
            return (
                <>
                    <p className="fs-5">
                        DROP-OFF DATE AND TIME
                    </p>
                    <div className={'d-flex gap-3'}>
                        <div className="d-flex justify-content-between align-items-center gap-2 col-8">
                            {dropOffDate.render()}
                        </div>
                        <div>
                            {dropOffTime.render()}
                        </div>
                    </div>
                </>
            );
        }
    }
}