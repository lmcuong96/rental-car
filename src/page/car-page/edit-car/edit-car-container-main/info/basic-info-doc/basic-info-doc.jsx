import {consumeContext, cs} from "cs-react";
import {PaperRow} from "./paper-row/paper-row.jsx";

export const BasicInfoDoc = () => cs(
    consumeContext('car'),
    ['registrationPaper', ({car}, next) => PaperRow({next, field: car.registrationPaper})],
    ['certificateOfInspection', ({car}, next) => PaperRow({next, field: car.certificateOfInspection})],
    ['insurance', ({car}, next) => PaperRow({next, field: car.insurance})],
    ({registrationPaper, certificateOfInspection, insurance}) => (
        <form>
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
                    {registrationPaper.render()}
                </tr>
                <tr className={"table-secondary"}>
                    <td>2</td>
                    <td>Certificate of Inspection</td>
                    {certificateOfInspection.render()}
                </tr>
                <tr className={"table-secondary"}>
                    <td>3</td>
                    <td>Insurance</td>
                    {insurance.render()}
                </tr>
                </tbody>
            </table>
            <button {...{
                onClick: (e) => {
                    e.preventDefault();
                    alert(JSON.stringify({
                        insurance,
                        registrationPaper,
                        certificateOfInspection
                    }))
                }
            }}>Save
            </button>
        </form>
    )
)

