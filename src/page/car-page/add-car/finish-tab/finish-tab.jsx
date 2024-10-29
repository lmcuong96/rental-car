import {cs, State} from "cs-react";
import {BasicTab} from "../basic-tab/basic-tab.jsx";

export const FinishTab = ({basicTab, detailTab, pricingTab, next}) => cs(
    ['finish', ({}, next) => State({initValue: basicTab, next})],
    ({finish}) => {
        const handleClick = () => {
            console.log(pricingTab);
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
                                <ol className="carousel-indicators">
                                    <li className="active" data-bs-slide-to="0"
                                        data-bs-target="#carouselExampleIndicators"></li>
                                    <li data-bs-slide-to="1"
                                        data-bs-target="#carouselExampleIndicators"></li>
                                    <li data-bs-slide-to="2"
                                        data-bs-target="#carouselExampleIndicators"></li>
                                    <li data-bs-slide-to="3"
                                        data-bs-target="#carouselExampleIndicators"></li>
                                </ol>

                                {/*Carousel Inner*/}
                                <div className="carousel-inner">
                                    {/*First Slide*/}
                                    <div className="carousel-item active">
                                        <img alt="First slide"
                                             className="d-block w-100 carousel-image"
                                             id="front-img"
                                             src={detailTab?.imageFrontFile
                                                 ? URL.createObjectURL(detailTab.imageFrontFile)
                                                 : ""}/>
                                    </div>
                                    {/*Second Slide*/}
                                    <div className="carousel-item">
                                        <img alt="Second slide"
                                             className="d-block w-100 carousel-image"
                                             id="back-img"
                                             src={detailTab?.imageBackFile
                                                 ? URL.createObjectURL(detailTab.imageBackFile)
                                                 : ""}/>
                                    </div>
                                    {/*Third Slide*/}
                                    <div className="carousel-item">
                                        <img alt="Third slide"
                                             className="d-block w-100 carousel-image"
                                             id="left-img"
                                             src={detailTab?.imageLeftFile
                                                 ? URL.createObjectURL(detailTab.imageLeftFile)
                                                 : ""}/>
                                    </div>
                                    {/*Fourth Slide*/}
                                    <div className="carousel-item">
                                        <img alt="Fourth slide"
                                             className="d-block w-100 carousel-image"
                                             id="right-img"
                                             src={detailTab?.imageRightFile
                                                 ? URL.createObjectURL(detailTab.imageRightFile)
                                                 : ""}/>
                                    </div>
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
                            <h4 id="title-preview">{basicTab.brandName && basicTab.model && basicTab.productionYear
                                ? basicTab.brandName + ' ' + basicTab.model + ' ' + basicTab.productionYear : 'Not Selected'}</h4>
                            <p><strong>No. of rides:</strong> <span
                                id="no-of-rides-preview">{basicTab.noOfSeats ? basicTab.noOfSeats : 'Not Selected'}</span>
                            </p>
                            <p><strong>Price:</strong> <span
                                id="price-preview">{pricingTab.basePrice ? pricingTab.basePrice : 'Not Selected'} k/day</span>
                            </p>
                            <p><strong>Locations:</strong> <span
                                id="location-preview">{detailTab.address ? detailTab.address : 'Not Selected'}</span>
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