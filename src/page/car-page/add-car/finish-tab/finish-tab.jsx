import {cs} from "cs-react";

export const FinishTab = (
    {
        previewImages,
        summary, // {price, location}
        formControl,
        next,
    }
) => cs(
    ({}) => {
        const handleClick = () => {
            console.table(formControl);
        }
        return next({
            render: () => (
                <fieldset>
                    <div className="row">
                        {/*Carousel Section*/}
                        <div className="col-md-6">
                            <div className="carousel slide w-100" data-bs-ride="carousel"
                                 id="carouselExampleIndicators">
                                {/*Carousel Indicators*/}
                                {/*<ol className="carousel-indicators">*/}
                                {/*    <li className="active" data-bs-slide-to="0"*/}
                                {/*        data-bs-target="#carouselExampleIndicators"></li>*/}
                                {/*    <li data-bs-slide-to="1"*/}
                                {/*        data-bs-target="#carouselExampleIndicators"></li>*/}
                                {/*    <li data-bs-slide-to="2"*/}
                                {/*        data-bs-target="#carouselExampleIndicators"></li>*/}
                                {/*    <li data-bs-slide-to="3"*/}
                                {/*        data-bs-target="#carouselExampleIndicators"></li>*/}
                                {/*</ol>*/}

                                {/*Carousel Inner*/}
                                <div className="carousel-inner">
                                    {previewImages.map((img, index) => (
                                        <div key={index} className="carousel-item active">
                                            <img alt={`${index}-"slide"`}
                                                 {...{
                                                     className: "d-block w-100 carousel-image",
                                                     id: "img-" + index,
                                                     src: img
                                                         ? URL.createObjectURL(img)
                                                         : ""
                                                 }}/>
                                        </div>
                                    ))}
                                </div>

                                {/*Carousel Controls*/}
                                <a className="carousel-control-prev" data-bs-slide="prev"
                                   href="#carouselExampleIndicators" role="button">
                                    <span aria-hidden="true" className="carousel-control-prev-icon"></span>
                                    <span className="visually-hidden">Previous</span>
                                </a>
                                <a className="carousel-control-next" data-bs-slide="next"
                                   href="#carouselExampleIndicators" role="button">
                                    <span aria-hidden="true" className="carousel-control-next-icon"></span>
                                    <span className="visually-hidden">Next</span>
                                </a>
                            </div>
                        </div>

                        {/*Car Details Section*/}
                        <div className="col-md-6 mt-3">
                            <h4 id="title-preview">{summary.title}</h4>
                            <p><strong>No. of rides:</strong> <span
                                id="no-of-rides-preview">{summary.noOfRides ?? 'Not Selected'}</span>
                            </p>
                            <p><strong>Price:</strong> <span
                                id="price-preview">{summary.price ?? 'Not Selected'} k/day</span>
                            </p>
                            <p><strong>Locations:</strong> <span
                                id="location-preview">{summary.address ?? 'Not Selected'}</span>
                            </p>
                            <p><strong>Status:</strong> <span className="status-available">Available</span>
                            </p>

                            <button className="btn btn-secondary cancelBtn"
                                    type="button">Cancel
                            </button>
                            <button className="btn btn-primary" id="submitBtn" onClick={handleClick}>Submit</button>
                        </div>
                    </div>
                </fieldset>
            )
        })
    }
)