import { useState } from "react";

export const PickUpDate = () => {
    const [date, setDate] = useState("");

    return {
       formControl: {
           invalid: !date,
           showErrors: () => <h4 className="text-danger">Pick-up date is required</h4>,
           addData: (ret) => ({ ...ret, date }),
       },
        render: () => {
            return (
                <>
                    <input
                        type="date"
                        className="form-control border-dark"
                        placeholder="Pick-up date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <i className="fa-solid fa-calendar-days fs-4 text-1"></i>
                </>
            );
        }
    };
};
