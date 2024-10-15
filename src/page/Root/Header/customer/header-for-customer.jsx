import {useNavigate} from "react-router-dom";

export function HeaderForCustomer() {
    const navigate = useNavigate();
    return (
        <div className="bg-1 d-flex justify-content-between align-items-center mx-auto text-light text-center px-4">
            <div className="col my-4 text-start align-self-start">
                <h1>Looking for a vehicale?</h1>
                <label className="fs-1">You're at the right place</label>
                <label className="fs-5">
                    We have a large selection of locally owned cars available
                    for you to cosse from. Rental plans are customised to suit
                    your needs.
                </label>
                <label className="fs-5">
                    With over 300 cars located nationwide we will have something
                    for you.
                </label>
            </div>
            <div className="col align-self-start text-start my-2 ">
                <div className="form-bg border border-dark p-2 rounded shadow py-3 px-5">
                    <h3>Find the ideal car rental for your trip</h3>
                    <form>
                        <label className="fs-5">PICK-UP LOCATION</label>
                        <input
                            type="text"
                            className="form-control border-dark"
                            placeholder="Pick-up location"
                        />
                        <div>
                            <label className="fs-5">
                                PICK-UP DATE AND TIME
                            </label>
                            <div className="d-flex justify-content-between gap-3">
                                <div className="d-flex justify-content-between align-items-center gap-2 col-8">
                                    <input
                                        type="date"
                                        className="form-control border-dark"
                                        placeholder="Pick-up date"
                                    />
                                    <i className="fa-solid fa-calendar-days fs-4 text-1"></i>
                                </div>
                                <div>
                                    <input
                                        type="time"
                                        className="form-control  border-dark"
                                        placeholder="Pick-up time"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="fs-5">
                                    DROP-OFF DATE AND TIME
                                </label>
                                <div className="d-flex justify-content-between gap-3">
                                    <div className="d-flex justify-content-between align-items-center gap-2 col-8">
                                        <input
                                            type="date"
                                            className="form-control border-dark"
                                            placeholder="Drop-off date"
                                        />
                                        <i className="fa-solid fa-calendar-days fs-4 text-1"></i>
                                    </div>
                                    <div>
                                        <input
                                            type="time"
                                            className="form-control border-dark"
                                            placeholder="Drop-off time"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={()=> navigate('/search')}
                            className="btn btn-primary my-3 w-50 mx-auto d-flex justify-content-center border-dark">
                            SEARCH
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
