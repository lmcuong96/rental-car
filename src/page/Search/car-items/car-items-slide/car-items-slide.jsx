export const CarItemsSlide = () => {
    return {
        render: ({car, carouselId }) => {  // Thêm carouselId để đảm bảo id duy nhất
            return (
                <div id={carouselId} className="carousel slide col" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target={`#${carouselId}`} data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={car.imageFront}
                                 alt="First slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src={car.imageBack}
                                 alt="Second slide"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 src={car.imageLeft}
                                 alt="Third slide"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev p-0 m-0" type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                            data-bs-target={`#${carouselId}`}
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            );
        }
    };
};
