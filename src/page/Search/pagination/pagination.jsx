import "./pagination.scss"
export const Pagination = () => {
    return {
        render: () => {
            return (
                <nav aria-label="Page navigation example" className={"w-100 d-flex justify-content-end gap-5"}>
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link " href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link " href="#">1</a></li>
                        <li className="page-item"><a className="page-link " href="#">2</a></li>
                        <li className="page-item"><a className="page-link " href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link " href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </a>
                        </li>
                    </ul>
                    <div className={"select-page-243 "}>
                        <select className="form-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <p >per page</p>
                    </div>
                </nav>
            )
        }
    }
}