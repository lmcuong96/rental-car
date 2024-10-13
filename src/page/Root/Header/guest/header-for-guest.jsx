import { useNavigate } from "react-router-dom";
import style from "./header-for-guest.module.css";
export function HeaderForGuest() {
    const navigate = useNavigate();
    return (
        <div className="bg-1 d-flex justify-content-between align-items-center mx-auto text-light text-center px-4">
            <div className="col my-2">
                <h1>Looking for a vehicale?</h1>
                <p className="fs-1">You're at the right place</p>
                <p className="fs-5">
                    Choose between 100's of private cars for rent at really low
                    prices!
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/customer")}
                >
                    Find a Rental Car Near You
                </button>
            </div>
            <div className={style.vr}></div>
            <div className="col ">
                <h1>Are you a car owner?</h1>
                <p className="fs-5">
                    List your car and make money from your asset
                </p>
                <button
                    className="btn btn-primary"
                    onClick={() => {
                        navigate("/car-owner");
                    }}
                >
                    List Your Car Today
                </button>
            </div>
        </div>
    );
}
