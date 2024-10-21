import {CarItemsSlide} from "./car-items-slide/car-items-slide.jsx";
import {CarItemsContent} from "./car-items-content/car-items-content.jsx";

export const CarItems = () => {
    const carItemsSlide = CarItemsSlide();
    const carItemsContent = CarItemsContent();
    return {
        render: ({
                     name, img1, img2, img3, price, location, id  // Nhận index để tạo id duy nhất
                 }) => {
            const carouselId = `carouselExampleIndicators-${id}`;  // Tạo id duy nhất
            return (
                <div className={'row row-cols-2 w-100 border border-black my-2 mx-auto'}>
                    {carItemsSlide.render({ img1, img2, img3, carouselId })}  {/* Truyền id duy nhất */}
                    {carItemsContent.render({ name, price, location })}
                </div>
            );
        }
    };
};
