import {useNavigate} from "react-router-dom";

export const CarItemsContent = () => {
    const navigate = useNavigate()
    return {
        render: ({car}) => {
            return (
                <div className="col d-flex justify-content-between mt-2">
                    <div className={"col-8"}>
                        <h1>{car.brand}</h1>
                        <p className={'fs-3'}><strong>No. of rides:</strong> {car.numOfSeats}</p>
                        <p className={'fs-3'}><strong>Price:</strong> {car.basePrice}k/day</p>
                        <p className={'fs-3'}><strong>Locations:</strong> {car.address}</p>
                        <p className={'fs-3'}><strong>Status:</strong> <span
                            className="status-available">{car.status}</span></p>
                    </div>

                    <div className={"col-4 d-flex flex-column gap-2"}>
                        <button type="button" className="btn btn-primary px-4 py-2">Rent now</button>
                        <button type="button" className="btn btn-primary"
                                onClick={() => navigate(`/edit-car/${car.id}`)}>View Details
                        </button>
                    </div>
                </div>

            )
        }
    }
}