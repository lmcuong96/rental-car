export const CarItemsContent = () => {
    return {
        render: ({name, price, location}) => {
            return (
                <div className="col d-flex justify-content-between mt-2">
                    <div className={"col-8"}>
                        <h1>{name}</h1>
                        <p className={'fs-3'}>
                            <strong>Ratings:</strong>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </p>
                        <span className="text-muted fs-4">(No ratings yet)</span>
                        <p className={'fs-3'}><strong>No. of rides:</strong> 0</p>
                        <p className={'fs-3'}><strong>Price:</strong> {price}/day</p>
                        <p className={'fs-3'}><strong>Locations:</strong> {location}</p>
                        <p className={'fs-3'}><strong>Status:</strong> <span
                            className="status-available">Available</span></p>
                    </div>

                    <div className={"col-4 d-flex flex-column gap-2"}>
                        <button type="button" className="btn btn-primary px-4 py-2">Rent now</button>
                        <button type="button" className="btn btn-primary">View Details</button>
                    </div>
                </div>

            )
        }
    }
}