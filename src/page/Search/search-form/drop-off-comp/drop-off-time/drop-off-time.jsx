import {useState} from "react";

export const DropOffTime = () => {
    const [time, setTime] = useState("");

    return {
        formControl: {
            invalid: !time,
            showErrors: () => <h4 className="text-danger">Drop-off time is required</h4>,
            addData: (ret) => ({ ...ret, time }),
        },
        render: () => <input
            type="time"
            className="form-control border-dark"
            placeholder="Drop-off time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
        />
    }
}