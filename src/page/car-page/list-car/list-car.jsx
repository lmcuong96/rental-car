import {useGetCar} from "../common/get-car/get-car.jsx";
import {CarItems} from "../../Search/car-items/car-items.jsx";
import {useNavigate} from "react-router-dom";

export const ListCar = () => {
    const {listCar, loading, handlePageChange, totalPages, page} = useGetCar();
    const carItem = CarItems();
    const navigate = useNavigate()
    const handleClick = (e) => {
        handlePageChange(e.target.value);
    }
    return (
        <>
            <h2>List of your car</h2>
            <div className={'edit-car-container-12s'}>
                {loading && <p>Loading...</p>}
                {!loading &&
                    listCar.map(car =>
                        <div key={car.id} className={'edit-car-content-sa1'}>
                            <div className={"edit-cars-content-slide-asd2"}>
                                {carItem.render({car})}
                            </div>
                        </div>
                    )
                }
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${page === 0 ? 'disabled' : ''}`}>
                            <button type="button" className="page-link" value={"Previous"}
                                    onClick={(e) => handleClick(e)
                                    }>Previous
                            </button>
                        </li>
                        {totalPages > 1 &&
                            [...Array(totalPages)]?.map((_, index) => {
                                console.log(page);

                                return (
                                    <li key={index} className={`page-item ${page == index ? 'active' : ''}`}>
                                        <button type="button" className="page-link" value={index}
                                                onClick={(e) => handleClick(e)
                                                }>{index + 1}
                                        </button>
                                    </li>
                                )
                            })
                        }
                        <li className={`page-item ${page == totalPages - 1 ? 'disabled' : ''}`}>
                            <button type="button" className="page-link" value={"Next"} onClick={(e) => handleClick(e)
                            }>Next
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className={"my-5 container"}>
                    <button className="btn btn-primary  py-3 fs-4" type="button" onClick={() => navigate('/add-car')}>Add
                        a new car
                    </button>
                </div>
            </div>
        </>
    )
}