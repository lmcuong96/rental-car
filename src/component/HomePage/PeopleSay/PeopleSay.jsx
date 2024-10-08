export function PeopleSay() {
    return (
        <div className="bg-body-secondary p-4">
            <h1>What people say?</h1>
            <div className="row row-cols-2 ">
                {[1, 2, 3, 4].map((item) => (
                    <div
                        key={item}
                        className="card mb-3 w-50 border border-0 bg-body-secondary"
                    >
                        <div className="row g-0 ">
                            <div className="col-md-4">
                                <i className="fa-solid fa-user w-100 fs-1 text-center d-flex justify-content-center align-items-center h-100"></i>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body d-flex flex-column gap-1">
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="25"
                                    >
                                        <div className="progress-bar w-25 bg-1"></div>
                                    </div>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="75"
                                    >
                                        <div className="progress-bar w-75 bg-1"></div>
                                    </div>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow="100"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        <div className="progress-bar w-100 bg-1"></div>
                                    </div>
                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label="Basic example"
                                        aria-valuenow="75"
                                        aria-valuemin="0"
                                        aria-valuemax="75"
                                    >
                                        <div className="progress-bar w-75 bg-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
