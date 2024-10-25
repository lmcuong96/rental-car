import {useState} from "react";
import ImageItem from "./image-item/image-item.jsx";
import "./images-coms.scss"
import {consumeContext, cs} from "cs-react";

export const ImagesComs = () => {
    const [car, setCar] = useState();

    const handleDelete = (imageIndex) => {
        setCar(prevCar => {
            const updatedCar = [...prevCar];
            const currentCar = updatedCar[0];
            const imageFields = ['img1', 'img2', 'img3', 'img4'];

            currentCar[imageFields[imageIndex]] = null;
            return updatedCar;
        });
    };

    const handleFileChange = (event, imageIndex) => {
        const file = event.target.files[0];
        const validExtensions = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];

        if (file && validExtensions.includes(file.type)) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setCar(prevCar => {
                    const updatedCar = [...prevCar];
                    const currentCar = updatedCar[0];
                    const imageFields = ['img1', 'img2', 'img3', 'img4'];

                    currentCar[imageFields[imageIndex]] = reader.result;
                    return updatedCar;
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert("Please select a valid image file (JPG, JPEG, PNG, GIF).");
        }
    };

    return cs(
        consumeContext("car"),
        ({car}) => (
            <>
                <p className={"fs-5 fw-bold"}>Images:</p>
                <div className={"image-sad1"}>
                    <ImageItem
                        label="Front"
                        image={car.img1}
                        onDelete={() => handleDelete(0)}
                        onFileChange={(e) => handleFileChange(e, 0)}
                    />
                    <ImageItem
                        label="Back"
                        image={car.img2}
                        onDelete={() => handleDelete(1)}
                        onFileChange={(e) => handleFileChange(e, 1)}
                    />
                    <ImageItem
                        label="Left"
                        image={car.img3}
                        onDelete={() => handleDelete(2)}
                        onFileChange={(e) => handleFileChange(e, 2)}
                    />
                    <ImageItem
                        label="Right"
                        image={car.img4}
                        onDelete={() => handleDelete(3)}
                        onFileChange={(e) => handleFileChange(e, 3)}
                    />
                </div>
            </>
        )
    );
}
