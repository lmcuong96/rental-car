import {useCar} from "../../../common/car-context.jsx";
import {consumeContext, cs} from "cs-react";

export const BasicInfoDoc = () => cs(
    consumeContext('car'),
    ({car}) => (
        <>
            <p>Documents:</p>
            <table className="table table-bordered">
                <thead>
                <tr className="table-dark">
                    <td scope="col">No</td>
                    <td scope="col">Name</td>
                    <td scope="col">Note</td>
                    <td scope="col">Link</td>
                </tr>
                </thead>
                <tbody>
                <tr className={"table-secondary"}>
                    <td>1</td>
                    <td>Registration paper</td>
                    <td>{car.registrationPaper ? "Verified" : "Not available"}</td>
                    <td>
                        {car.registrationPaper ? <a href="">{car.registrationPaper}</a> :
                            <p className="mb-0">Not available</p>}
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Certificate of Inspection</td>
                    <td>{car.certificateOfInspection ? "Verified" : "Not available"}</td>
                    <td>
                        {car.certificateOfInspection ? <a href="">{car.certificateOfInspection}</a> :
                            <p className="mb-0">Not available</p>}
                    </td>
                </tr>
                <tr className={"table-secondary"}>
                    <td>3</td>
                    <td>Insurance</td>
                    <td>{car.insurance ? "Verified" : "Not available"}</td>
                    <td>
                        {car.insurance ? <a href="">{car.insurance}</a> :
                            <p className="mb-0">Not available</p>}
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
)

