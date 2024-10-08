export function NavForGuest() {
    return (
        <div className=" d-flex justify-content-between align-items-center mx-auto text-light text-center">
            <div className="col y-2">
                <h1>Looking for a vehicale?</h1>
                <p className="fs-1">You're at the right place</p>
                <p className="fs-5">
                    Choose between 100's of private cars for rent at really low
                    prices!
                </p>
                <button className="btn btn-primary">
                    Find a Rental Car Near You
                </button>
            </div>
            <div className="vr"></div>
            <div className="col ">
                <h1>Are you a car owner?</h1>
                <p className="fs-5">
                    List your car and make money from your asset
                </p>
                <button className="btn btn-primary">
                    Find a Rental Car Near You
                </button>
            </div>
        </div>
    );
}
