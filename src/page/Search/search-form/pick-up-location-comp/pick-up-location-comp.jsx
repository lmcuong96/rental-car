import {useState} from "react";

export const PickUpLocationComp = () => {
    const [location, setLocation] = useState('');

    return {
       formControl: {
           invalid: !location,
           showErrors: () => <h4 className="text-danger">Pick-up location is required</h4>,
           addData: (ret) => ({...ret, location}),
       },
        render: () => <div className={'py-3 mb-4 w-50'}>
            <label className="fs-5">PICK-UP LOCATION</label>
            <input
                type="text"
                className="form-control border-dark"
                placeholder="Pick-up location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
        </div>
    }
}