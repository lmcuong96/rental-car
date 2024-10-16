export function BasicInfoDoc() {
    return (
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
                    <td>Verifed</td>
                    <td><a href="">File1.PDF</a></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Certifcate of Inspection</td>
                    <td>Verifed</td>
                    <td><a href="">File2.PDF</a></td>
                </tr>
                <tr className={"table-secondary"}>
                    <td>3</td>
                    <td>Insurance</td>
                    <td>Not available</td>
                    <td><a href="">Not available</a></td>
                </tr>
                </tbody>
            </table>
        </>
    )
}