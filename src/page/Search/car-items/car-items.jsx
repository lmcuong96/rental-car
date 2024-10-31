import {CarItemsSlide} from "./car-items-slide/car-items-slide.jsx";
import {CarItemsContent} from "./car-items-content/car-items-content.jsx";

export const CarItems = () => {
    const carItemsSlide = CarItemsSlide();
    const carItemsContent = CarItemsContent();
    return {
        render: ({car}) => {
            const carouselId = `carouselExampleIndicators-${car.id}`;  // Tạo id duy nhất
            return (
                <div className={'row row-cols-2 w-100 border border-black my-2 mx-auto'}>
                    {carItemsSlide.render({
                        car, carouselId
                    })}
                    {carItemsContent.render({car})}
                </div>
            );
        }
    };
};
