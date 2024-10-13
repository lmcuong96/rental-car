import {useState} from "react";

export const PickUpTime = () => {
    const [time, setTime] = useState("");

    return {
       formControl: {
           invalid: !time,
           showErrors: () => <h4 className="text-danger">Pick-up time is required</h4>,
           addData: (ret) => ({ ...ret, time }),
       },
        render: () => <input
            type="time"
            className="form-control border-dark"
            placeholder="Pick-up time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
    }
}